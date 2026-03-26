import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Heart, Star, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import placeholderImage from "../assets/image.png";

// Mock database - in a real app, this would come from your backend
const childrenDatabase = [
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
  }
];

export default function ChildDashboard() {
  const navigate = useNavigate();
  const { childId } = useParams();
  const [childData, setChildData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(null);

  useEffect(() => {
    // Find the child data based on the childId
    const child = childrenDatabase.find(child => child.id === childId);
    if (child) {
      setChildData(child);
      setEditedData(child);
    }
  }, [childId]);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setChildData(editedData);
    setIsEditing(false);
    // Here you would make an API call to update the data
  };

  if (!childData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
        <main className="container mx-auto px-4 py-24">
          <div className="flex items-center justify-center h-[60vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <main className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <button
          onClick={() => navigate('/dashboard/parent')}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Back to Dashboard</span>
        </button>

        {/* Child Info Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={childData.image}
                  alt={childData.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = placeholderImage;
                  }}
                  className="w-32 h-32 rounded-full object-cover border-4 border-orange-100"
                />
                <div className="absolute -top-2 -right-2">
                  <Star className="h-8 w-8 text-yellow-400 fill-current" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{childData.name}'s Dashboard</h1>
                <p className="text-lg text-gray-600 mt-2">Track development and progress</p>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
            >
              {isEditing ? "Cancel" : "Edit Details"}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleEditSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={editedData.name}
                    onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Age</label>
                  <input
                    type="number"
                    value={editedData.age}
                    onChange={(e) => setEditedData({ ...editedData, age: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Level</label>
                  <input
                    type="text"
                    value={editedData.level}
                    onChange={(e) => setEditedData({ ...editedData, level: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={editedData.height}
                    onChange={(e) => setEditedData({ ...editedData, height: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={editedData.weight}
                    onChange={(e) => setEditedData({ ...editedData, weight: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 font-medium shadow-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <InfoCard
                title="Basic Info"
                items={[
                  { label: "Age", value: `${childData.age} years` },
                  { label: "Gender", value: childData.gender },
                  { label: "Level", value: childData.level }
                ]}
              />
              <InfoCard
                title="Physical Stats"
                items={[
                  { label: "Height", value: `${childData.height} cm` },
                  { label: "Weight", value: `${childData.weight} kg` }
                ]}
              />
              <InfoCard
                title="Latest Update"
                items={[
                  { label: "Last Check", value: "2 days ago" },
                  { label: "Next Check", value: "In 5 days" }
                ]}
              />
            </div>
          )}
        </div>

        {/* Growth Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Height Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Height Progress</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={childData.growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="height"
                  stroke="#F97316"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#F97316" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Weight Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Weight Progress</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={childData.growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="month" stroke="#4B5563" />
                <YAxis stroke="#4B5563" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "none",
                    borderRadius: "8px",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="#EAB308"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "#EAB308" }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function InfoCard({ title, items }) {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{item.label}</span>
            <span className="font-medium text-gray-800">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 