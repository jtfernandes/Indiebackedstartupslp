"""Thin async client for the Buttondown subscribers API.

Docs: https://docs.buttondown.com/api-subscribers-create

Swap target: to switch to Listmonk, replace this module with one that exposes
the same `create_subscriber(...)` coroutine but POSTs to Listmonk's
/api/subscribers endpoint. See README for details.
"""

from __future__ import annotations

import logging
from typing import Sequence

import httpx

logger = logging.getLogger(__name__)

BUTTONDOWN_URL = "https://api.buttondown.com/v1/subscribers"


class ButtondownError(Exception):
    """Raised on unrecoverable upstream failures."""


async def create_subscriber(
    *,
    api_key: str,
    email: str,
    name: str,
    company: str,
    tags: Sequence[str],
) -> None:
    payload = {
        "email_address": email,
        "tags": list(tags),
        "notes": f"Name: {name}\nCompany: {company}",
        "metadata": {"name": name, "company": company},
    }
    headers = {
        "Authorization": f"Token {api_key}",
        "Content-Type": "application/json",
    }

    async with httpx.AsyncClient(timeout=10.0) as client:
        try:
            response = await client.post(BUTTONDOWN_URL, json=payload, headers=headers)
        except httpx.HTTPError as exc:
            logger.exception("Network error talking to Buttondown")
            raise ButtondownError("network error") from exc

    # Treat "already subscribed" (Buttondown returns 400 with a known code) as
    # success — adding a tag to an existing subscriber is the expected outcome.
    if response.status_code == 400:
        try:
            body = response.json()
        except ValueError:
            body = {}
        code = body.get("code") if isinstance(body, dict) else None
        if code == "email_already_exists":
            logger.info("Subscriber %s already exists; treating as success", email)
            return

    if response.status_code >= 400:
        logger.error(
            "Buttondown rejected request: status=%s body=%s",
            response.status_code,
            response.text[:500],
        )
        raise ButtondownError(f"upstream {response.status_code}")
