import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import VideoUploader from "../Components/VideoUploader";

export default function ParentVideoPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <main className="container mx-auto px-4 pt-24 pb-24">
        <button
          onClick={() => navigate("/dashboard/parent")}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
        >
          Back to Dashboard
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Verify Video
          </h1>
          <VideoUploader />
        </div>
      </main>

      <Footer />
    </div>
  );
}

