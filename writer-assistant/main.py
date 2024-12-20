from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# BaseModel for input validation
class QueryInput(BaseModel):
    prompt: str

# Endpoint to call Groq API
@app.post("/generate/")
def generate_response(input: QueryInput):
    GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"  # Replace with the correct Groq API endpoint
    API_KEY = os.getenv("GROQ_API_KEY")  # Ensure your .env file has the correct API key

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }

    data = {
        "model": "llama-3.3-70b-versatile",
        "messages": [{"role": "user", "content": input.prompt}],
        "temperature": 0.7,
        "max_tokens": 10000,
        "top_p": 1.0,
    }

    response = requests.post(GROQ_API_URL, headers=headers, json=data)

    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)

    