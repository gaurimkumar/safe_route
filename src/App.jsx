
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ReportHazard from './pages/ReportHazard'
import Home from './pages/Home'
import ViewReport from './pages/ViewReport'
import HazardMap from './pages/HazardMap'
import AllReports from './pages/AllReports'
import MyReports from './pages/MyReports'
import EmergencyWeather from './pages/EmergencyWeather'
import AdminDashboard from './pages/AdminDashboard'
import HazardDetails from './pages/HazardDetails'
import DashboardLayout from './components/DashboardLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report-hazard" element={<ReportHazard />} />
        <Route path="/hazard-map" element={<HazardMap />} />
        <Route path="/reports" element={<AllReports />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/hazard-details" element={<HazardDetails />} />
        <Route path="/view-report" element={<ViewReport />} />
        <Route path="/emergency-weather" element={<EmergencyWeather />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      
    </Routes>
  )
}

export default App
