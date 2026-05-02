from typing import Literal

from pydantic import BaseModel, EmailStr, Field

Segment = Literal["startup", "vc", "accelerator"]


class WaitlistRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    company: str = Field(min_length=1, max_length=160)
    email: EmailStr
    segment: Segment


class WaitlistResponse(BaseModel):
    ok: bool = True
