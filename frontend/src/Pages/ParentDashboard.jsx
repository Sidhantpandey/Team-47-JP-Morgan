import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Heart, Star, ChevronRight, Plus } from "lucide-react";
import Footer from "../Components/Footer";
import MilestoneQuiz from "../Components/MilestoneQuiz";
import { getStoredUser } from "../utils/auth";
import placeholderImage from "../assets/image.png";

export default function ParentDashboard() {
  const navigate = useNavigate();
  const user = getStoredUser();
  const parentName = user?.fullName || user?.email || "Parent";
  const [videos, setVideos] = useState([]);
  const [videoError, setVideoError] = useState(null);
  const [videosLoading, setVideosLoading] = useState(false);
  const [showAddChildForm, setShowAddChildForm] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [newChild, setNewChild] = useState({
    name: "",
    age: "",
    gender: ""
  });

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
  const searchQuery = "child development milestones";

  // Mock children data - in a real app, this would come from an API
  const [children, setChildren] = useState([
    { 
      id: "1", 
      name: "Riya", 
      age: 5, 
      gender: "female", 
      level: "Kindergarten",
      height: 110,
      weight: 19,
      image: placeholderImage,
      growthData: [
        { month: "Jan", height: 108, weight: 18 },
        { month: "Feb", height: 108.5, weight: 18.2 },
        { month: "Mar", height: 109, weight: 18.5 },
        { month: "Apr", height: 109.5, weight: 18.8 },
        { month: "May", height: 110, weight: 19 },
      ]
    },
    { 
      id: "2", 
      name: "Arjun", 
      age: 4, 
      gender: "male", 
      level: "Pre-K",
      height: 105,
      weight: 17,
      image: placeholderImage,
      growthData: [
        { month: "Jan", height: 103, weight: 16 },
        { month: "Feb", height: 103.5, weight: 16.3 },
        { month: "Mar", height: 104, weight: 16.5 },
        { month: "Apr", height: 104.5, weight: 16.8 },
        { month: "May", height: 105, weight: 17 },
      ]
    },
  ]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setVideosLoading(true);
        setVideoError(null);

        if (!API_KEY) {
          setVideoError("YouTube API key is missing");
          return;
        }

        const res = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              key: API_KEY,
              q: searchQuery,
              part: "snippet",
              type: "video",
              maxResults: 3,
            },
            // Prevent "infinite loading" if YouTube doesn't respond.
            timeout: 8000,
          }
        );

        if (res.data.items) {
          setVideos(res.data.items);
          setVideoError(null);
        } else {
          setVideos([]);
          setVideoError(null);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        const message =
          error?.code === "ECONNABORTED" ||
          error?.message?.toLowerCase()?.includes("timeout")
            ? "YouTube request timed out. Please check your API key/network."
            : error?.message || "Failed to fetch videos.";
        setVideoError(message);
      } finally {
        setVideosLoading(false);
      }
    };

    fetchVideos();
  }, [API_KEY]);

  const handleAddChild = (e) => {
    e.preventDefault();
    if (!newChild.gender) {
      alert("Please select a gender");
      return;
    }
    const newChildData = {
      id: String(children.length + 1),
      ...newChild,
      level: "Not Set",
      height: 0,
      weight: 0,
      image: placeholderImage,
      growthData: []
    };
    setChildren([...children, newChildData]);
    setShowAddChildForm(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = () => {
    setShowQuiz(false);
    setNewChild({ name: "", age: "", gender: "" });
  };

  const handleChildClick = (childId) => {
    navigate(`/dashboard/parent/child/${childId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <main className="container mx-auto px-4 py-24">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <Heart className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome back, {parentName} 👋
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track your children's development and watch them grow with our comprehensive monitoring tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Children Cards Section */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Children</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {children.map((child) => (
                <div
                  key={child.id}
                  onClick={() => handleChildClick(child.id)}
                  className="bg-white rounded-xl shadow-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={child.image}
                      alt={child.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = placeholderImage;
                      }}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-orange-100"
                    />
                    <div className="absolute -top-2 -right-2">
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{child.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Click to view details</p>
                </div>
              ))}

              {/* Add Child Card */}
              <div
                onClick={() => setShowAddChildForm(true)}
                className="bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-xl flex items-center justify-center group"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Plus className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-orange-600">Add Child</p>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Videos Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Learning Videos</h2>
            <div className="space-y-4">
              {videosLoading ? (
                <div className="flex items-center justify-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500" />
                </div>
              ) : videoError ? (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg">
                  <p>{videoError}</p>
                  <p className="text-sm mt-2">Please check your API key configuration.</p>
                </div>
              ) : videos.length > 0 ? (
                videos.map((video) => (
                  <div key={video.id.videoId} className="aspect-video rounded-lg overflow-hidden shadow-md">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id.videoId}`}
                      title={video.snippet.title}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-600 py-8">
                  No videos found.
                </div>
              )}
            </div>
          </div>

          {/* Navigate to Video Verifier */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Verify Video
            </h2>
            <button
              onClick={() => navigate("/dashboard/parent/video")}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              Upload & Verify
            </button>
            <p className="text-sm text-gray-600 mt-3">
              Upload a video and show the API response on the verifier page.
            </p>
          </div>
        </div>
      </main>

      {/* Add Child Modal */}
      {showAddChildForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Child</h2>
            <form onSubmit={handleAddChild} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  value={newChild.name}
                  onChange={(e) => setNewChild({ ...newChild, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  placeholder="Enter child's name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Age</label>
                <input
                  type="number"
                  value={newChild.age}
                  onChange={(e) => setNewChild({ ...newChild, age: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                  min="0"
                  max="18"
                  placeholder="Enter child's age"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Gender</label>
                <select
                  value={newChild.gender}
                  onChange={(e) => setNewChild({ ...newChild, gender: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddChildForm(false);
                    setNewChild({ name: "", age: "", gender: "" });
                  }}
                  className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                >
                  Add Child
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Milestone Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <MilestoneQuiz
            childName={newChild.name}
            onComplete={handleQuizComplete}
          />
        </div>
      )}

      <Footer />
    </div>
  );
}
