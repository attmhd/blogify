import os
from dotenv import load_dotenv
from groq import Groq
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Initialize Groq client
client = Groq()
client.api_key = os.getenv("GROQ_API_KEY")

class ChatRequest(BaseModel):
    content: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": request.content,
                }
            ],
            model="llama3-8b-8192",
            max_tokens=1024,
            temperature=0.5,
            top_p=0.8
        )
        return {"response": chat_completion.choices[0].message.content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating chat completion: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8080)