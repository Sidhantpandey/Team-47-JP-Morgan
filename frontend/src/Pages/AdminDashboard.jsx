import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AdminDashboard() {
  const dashboardData = {
    parents: 42,
    students: 58,
    completed: 36,
    pending: 22,
    recommendations: [
      "Encourage more parent-teacher meetings",
      "Improve access to learning resources",
      "Introduce digital tracking of milestones",
    ],
  };

  const barData = [
    { name: "Completed", value: dashboardData.completed },
    { name: "Pending", value: dashboardData.pending },
  ];

  const pieData = [
    { name: "Parents", value: dashboardData.parents },
    { name: "Students", value: dashboardData.students },
    { name: "Completed", value: dashboardData.completed },
  ];

  const pieColors = ["#60A5FA", "#34D399", "#FBBF24"];

  return (
    <>
      <Navbar />
<button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => {
            // Clear all cookies
            document.cookie.split(";").forEach((c) => {
              document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date(0).toUTCString() + ";path=/");
            });
            // Redirect to home
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      <main className="min-h-[80vh] bg-gray-50 px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
          <StatCard title="Number of Parents" value={dashboardData.parents} />
          <StatCard title="Number of Students" value={dashboardData.students} />
          <StatCard title="Successfully Completed" value={dashboardData.completed} />
          <StatCard title="Pending" value={dashboardData.pending} />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Completion Status</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4 text-center">Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recommendations */}
        <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
          <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {dashboardData.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}

// Subcomponent: Stat Card
function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded shadow p-6 text-center">
      <h3 className="text-lg font-semibold text-gray-700 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
}

