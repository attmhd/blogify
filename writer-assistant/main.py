import os
from dotenv import load_dotenv
from groq import Groq
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import uvicorn
import markdown

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Initialize Groq client
client = Groq()
client.api_key = os.getenv("GROQ_API_KEY")

class ChatRequest(BaseModel):
    title: str

def create_prompt(title):
    prompt = """
    You are a writter assistant. You are helping a writer write a post. The writer has given you the following title.
    title: {title}

    Write a blog post based on the title and give response in Bahasa.
    """

    return prompt.format(title=title)


@app.post("/generate")
async def chat(request: ChatRequest):
    try:
        prompt = create_prompt(request.title)

        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="llama3-8b-8192",
            max_tokens=1024,
            temperature=0.7,
            top_p=0.8
        )

        response = chat_completion.choices[0].message.content
        response = markdown.markdown(response)

        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating chat completion: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app)