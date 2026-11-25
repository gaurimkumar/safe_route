
import {
  HiHome,
  HiMap,
  HiPlusCircle,
  HiDocumentText,
  HiClipboardList,
  HiCloud,
  HiShieldCheck,
  HiLogout
} from 'react-icons/hi'

import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 z-50 w-64 h-screen overflow-y-auto bg-[#173D34] text-white p-5">

      <h1 className="text-2xl font-bold mb-10">
        🛡 SafeRoute
      </h1>

      <p className="text-xs text-green-300 uppercase mb-4">
        Main Menu
      </p>

      <nav className="space-y-2">

        <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg bg-[#26745B]">
          <HiHome /> Dashboard
        </Link>

        <Link to="/hazard-map" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
          <HiMap /> Hazard Map
        </Link>

        <Link to="/report-hazard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
          <HiPlusCircle /> Report a Hazard
        </Link>

        <Link to="/reports" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
          <HiDocumentText /> All Reports
        </Link>

        <Link to="/my-reports" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
          <HiClipboardList /> My Reports
        </Link>

        <Link to="/emergency-weather" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
          <HiCloud /> Emergency & Weather
        </Link>

      </nav>

      <p className="text-xs text-green-300 uppercase mt-8 mb-4">
        Administration
      </p>

      <Link to="/admin" className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10">
        <HiShieldCheck /> Admin Dashboard
      </Link>

      <Link to="/login" className="flex items-center gap-3 p-3 rounded-lg mt-10 text-red-200 hover:bg-white/10">
        <HiLogout /> Logout
      </Link>

    </aside>
  )
}

export default Sidebar
