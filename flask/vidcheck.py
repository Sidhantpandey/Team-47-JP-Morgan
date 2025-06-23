from flask import Flask, request, jsonify
import tempfile
import os
from your_agno_module import analyze_video_text
from fuzzywuzzy import fuzz

app = Flask(__name__)

# To verify a video against a milestone
# This endpoint expects a video file and a milestone text

@app.route('/api/verify-video', methods=['POST'])
def verify_video():
    video = request.files.get("video")
    milestone = request.form.get("milestone")

    if not video or not milestone:
        return jsonify({"success": False, "message": "Missing video or milestone"}), 400

    # Save video to a temporary file (auto-deleted after closing)
    with tempfile.NamedTemporaryFile(delete=True, suffix=".mp4") as temp_video:
        video.save(temp_video.name)
        
        # Run your AGNO agent on the video file
        summary_text = analyze_video_text(temp_video.name)  # You already built this

    # Compare the summary with milestone
    similarity_score = fuzz.partial_ratio(summary_text.lower(), milestone.lower())
    
    if similarity_score > 70:  # tune this threshold
        return jsonify({"success": True, "message": "Video matches the milestone!"})
    else:
        return jsonify({"success": False, "message": "Video does not match the milestone."})

if __name__ == "__main__":
    app.run(debug=True)
