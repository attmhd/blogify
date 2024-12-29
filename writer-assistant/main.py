import os
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse  # Use HTMLResponse for HTML output
from pydantic import BaseModel
import uvicorn
from langchain_groq import ChatGroq  # Correct import for Groq integration
from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
import markdown

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Groq client (using ChatGroq from langchain_groq)
llm = ChatGroq(
    api_key=os.getenv("GROQ_API_KEY"),
    max_tokens=2010,
    temperature=0.5,
    top_p=0.8,
    )

# Define the request model for input
class ChatRequest(BaseModel):
    title: str

# Define the function to create a prompt
def create_prompt(title):
    prompt = """
    You are a writer assistant. You are helping a writer write a post. The writer has given you the following title.
    title: {title}

    Write a blog post based on the title and give response in Bahasa Indonesia and give response in plain text.
    """
    return prompt.format(title=title)

def response_to_html(response, request):
    return f"""
        <html>
            <head>
                <title>Generated Blog Post</title>
            </head>
            <body>
                <h1>Blog Post for: {request.title}</h1>
                <div>
                    {markdown.markdown(response)}  <!-- Convert Markdown to HTML -->
                </div>
            </body>
        </html>
        """

@app.post("/generate", response_class=HTMLResponse)
async def chat(request: ChatRequest):
    try:
        prompt = create_prompt(request.title)
        
        # Define the prompt template
        prompt_template = PromptTemplate(input_variables=["title"], template=prompt)
        
        # Create a chain with LLMChain and the prompt template
        chain = LLMChain(llm=llm, prompt=prompt_template)
        
        # Run the chain with the title as input
        response = chain.run(title=request.title)
        
        # Convert the response into HTML (you can also customize the HTML format here)
        html_response = response_to_html(response, request)
        
        # Return the HTML response
        return HTMLResponse(content=html_response)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating chat completion: {str(e)}")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
