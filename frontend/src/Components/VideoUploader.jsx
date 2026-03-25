import React, { useState } from "react";

const VideoUploadVerifier = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [milestone, setMilestone] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleMilestoneChange = (e) => {
    setMilestone(e.target.value);
  };

  const handleUpload = async () => {
    if (!videoFile || !milestone) {
      alert("Please select a video and enter a milestone.");
      return;
    }

    const formData = new FormData();
    formData.append("video", videoFile);
    formData.append("milestone", milestone);

    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/verify-video", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setResult(data.message);
    } catch (error) {
      console.error("Upload error:", error);
      setResult("Error verifying the video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Video Verifier</h2>

      <input
        type="file"
        accept="video/*"
        onChange={handleFileChange}
        className="block w-full"
      />

      <input
        type="text"
        value={milestone}
        onChange={handleMilestoneChange}
        placeholder="Enter milestone topic"
        className="block w-full border px-3 py-2 rounded"
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Checking..." : "Verify Video"}
      </button>

      {result && (
        <div className="mt-4 p-2 bg-gray-100 rounded border">{result}</div>
      )}
    </div>
  );
};

export default VideoUploadVerifier;
