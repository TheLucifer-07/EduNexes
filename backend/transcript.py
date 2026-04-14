import json
import sys
from urllib.parse import parse_qs, urlparse

from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api._errors import (
    NoTranscriptFound,
    RequestBlocked,
    TranscriptsDisabled,
    VideoUnavailable,
    YouTubeRequestFailed,
)

def get_video_id(url):
    """Extract a video ID from common YouTube URL formats."""
    parsed = urlparse(url)
    host = parsed.netloc.lower()
    path_parts = [part for part in parsed.path.split("/") if part]

    if "youtu.be" in host and path_parts:
        return path_parts[0]

    if "youtube.com" in host or "youtube-nocookie.com" in host:
        query_video_id = parse_qs(parsed.query).get("v", [None])[0]
        if query_video_id:
            return query_video_id

        if len(path_parts) >= 2 and path_parts[0] in {"shorts", "embed", "live", "v"}:
            return path_parts[1]

    return None


def serialize_success(text, language_code):
    return json.dumps({
        "ok": True,
        "text": text,
        "languageCode": language_code,
    }, ensure_ascii=False)


def serialize_error(code, message):
    return json.dumps({
        "ok": False,
        "code": code,
        "error": message,
    }, ensure_ascii=False)


def fetch_best_transcript(video_id):
    api = YouTubeTranscriptApi()
    transcript_list = api.list(video_id)
    preferred_languages = ["en", "en-US", "en-GB"]

    try:
        transcript = transcript_list.find_transcript(preferred_languages)
    except NoTranscriptFound:
        transcripts = list(transcript_list)
        if not transcripts:
            raise

        transcript = transcripts[0]

        if transcript.language_code != "en" and transcript.is_translatable:
            try:
                transcript = transcript.translate("en")
            except Exception:
                pass

    fetched_transcript = transcript.fetch()
    text = " ".join(snippet.text for snippet in fetched_transcript)
    return text, fetched_transcript.language_code

def fetch_transcript(url):
    """Fetch transcript from YouTube video."""
    video_id = get_video_id(url)

    if not video_id:
        return serialize_error("INVALID_URL", "Invalid YouTube URL")

    try:
        text, language_code = fetch_best_transcript(video_id)
        if not text.strip():
            return serialize_error("EMPTY_TRANSCRIPT", "Transcript was empty")
        return serialize_success(text, language_code)
    except TranscriptsDisabled:
        return serialize_error("TRANSCRIPTS_DISABLED", "Captions are disabled for this video")
    except NoTranscriptFound:
        return serialize_error("NO_TRANSCRIPT", "No transcript was found for this video")
    except VideoUnavailable:
        return serialize_error("VIDEO_UNAVAILABLE", "This video is unavailable")
    except RequestBlocked:
        return serialize_error(
            "REQUEST_BLOCKED",
            "YouTube is blocking transcript requests from this server IP",
        )
    except YouTubeRequestFailed as error:
        return serialize_error("YOUTUBE_REQUEST_FAILED", str(error))
    except Exception as error:
        return serialize_error("UNKNOWN_ERROR", str(error))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(serialize_error("MISSING_URL", "No URL provided"))
        sys.exit(1)

    url = sys.argv[1]
    result = fetch_transcript(url)
    print(result)
