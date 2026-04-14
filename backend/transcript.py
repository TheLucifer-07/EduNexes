import sys
from youtube_transcript_api import YouTubeTranscriptApi

def get_video_id(url):
    """Extract video ID from YouTube URL"""
    if "v=" in url:
        return url.split("v=")[1].split("&")[0]
    elif "youtu.be/" in url:
        return url.split("youtu.be/")[1].split("?")[0]
    return None

def fetch_transcript(url):
    """Fetch transcript from YouTube video"""
    video_id = get_video_id(url)

    if not video_id:
        return "Error: Invalid YouTube URL"

    try:
        # Fetch transcript
        transcript_data = YouTubeTranscriptApi().fetch(video_id, languages=['en'])
        
        # Combine all text segments
        text = " ".join([item.text for item in transcript_data])
        return text

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Error: No URL provided")
        sys.exit(1)
    
    url = sys.argv[1]
    result = fetch_transcript(url)
    print(result)