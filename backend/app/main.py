"""FastAPI app exposing POST /api/waitlist.

Single endpoint that proxies waitlist submissions to Buttondown with a tag
matching the submitter's segment (`startup` | `vc` | `accelerator`).

The Buttondown API key is read from the BUTTONDOWN_API_KEY env var. CORS
origins are read from ALLOWED_ORIGINS (comma-separated). See .env.example.
"""

from __future__ import annotations

import logging
import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from .buttondown import ButtondownError, create_subscriber
from .schemas import WaitlistRequest, WaitlistResponse

load_dotenv()
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

DEV_ORIGIN = "http://localhost:5173"


def _allowed_origins() -> list[str]:
    raw = os.getenv("ALLOWED_ORIGINS", "")
    extras = [o.strip() for o in raw.split(",") if o.strip()]
    return list({DEV_ORIGIN, *extras})


app = FastAPI(title="IndieBacked Startups — waitlist")

app.add_middleware(
    CORSMiddleware,
    allow_origins=_allowed_origins(),
    allow_credentials=False,
    allow_methods=["POST", "GET", "OPTIONS"],
    allow_headers=["Content-Type"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.post("/api/waitlist", response_model=WaitlistResponse)
async def waitlist(payload: WaitlistRequest) -> WaitlistResponse:
    api_key = os.getenv("BUTTONDOWN_API_KEY")
    if not api_key:
        logger.error("BUTTONDOWN_API_KEY is not set; refusing to accept submissions")
        raise HTTPException(status_code=500, detail="email service not configured")

    try:
        await create_subscriber(
            api_key=api_key,
            email=payload.email,
            name=payload.name,
            company=payload.company,
            tags=[payload.segment],
        )
    except ButtondownError:
        raise HTTPException(status_code=502, detail="upstream error")

    return WaitlistResponse()
