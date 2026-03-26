import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

export default function VolunteerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <main className="container mx-auto px-4 pt-24 pb-24">
        <button
          onClick={() => navigate("/")}
          className="flex items-center text-gray-600 hover:text-orange-500 transition-colors mb-8"
        >
          Back to Home
        </button>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Volunteer Dashboard
          </h1>
          <p className="text-gray-600">
            This section is under development. You can still use other parts
            of the app.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

