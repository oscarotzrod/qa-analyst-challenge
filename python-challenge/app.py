# app.py
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class DataIn(BaseModel):
    numbers: List[float]

@app.post("/stats")
def calculate_stats(data: DataIn):
    nums = data.numbers
    if not nums:
        return {"mean": None, "max": None, "min": None}
    return {
        "mean": sum(nums) / len(nums),
        "max": max(nums),
        "min": min(nums),
    }
