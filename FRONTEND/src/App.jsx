import React from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import LoginPage from './Pages/LoginPage';
import AdminDashboard from "./Pages/AdminDashboard";
import ParentDashboard from "./Pages/ParentDashboard";
import ChildDashboard from "./Pages/ChildDashboard";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/dashboard/parent" element={<ParentDashboard />} />
      <Route path="/dashboard/parent/child/:childId" element={<ChildDashboard />} />
      

    </Routes>
  );
}

export default App

