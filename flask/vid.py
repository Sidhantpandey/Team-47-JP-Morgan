from pathlib import Path

from agno.agent import Agent
from agno.media import Video
from agno.models.google import Gemini
import os
from dotenv import load_dotenv
load_dotenv()
agent = Agent(
    model=Gemini(id="gemini-2.0-flash-exp"),
    markdown=True,
)


video_path = ""

agent.print_response("Tell me about this video", videos=[Video(filepath=video_path)])