import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import LoginPage from './Pages/LoginPage';
import AdminDashboard from "./Pages/AdminDashboard";
import ParentDashboard from "./Pages/ParentDashboard";
import ChildDashboard from "./Pages/ChildDashboard";
import ParentVideoPage from "./Pages/ParentVideoPage";
import VolunteerDashboard from "./Pages/VolunteerDashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import AppLayout from "./Components/AppLayout";
import UmangFellowship from "./Pages/UmangFellowship";
import ContactPage from "./Pages/ContactPage";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/umang-fellowship" element={<UmangFellowship />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute requiredRole="admin" />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>

          <Route element={<ProtectedRoute requiredRole="parent" />}>
            <Route path="/dashboard/parent" element={<ParentDashboard />} />
            <Route
              path="/dashboard/parent/child/:childId"
              element={<ChildDashboard />}
            />
            <Route
              path="/dashboard/parent/video"
              element={<ParentVideoPage />}
            />
          </Route>

          <Route element={<ProtectedRoute requiredRole="volunteer" />}>
            <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
          </Route>
        </Route>


      </Routes>
    </>
  );
}

export default App;

