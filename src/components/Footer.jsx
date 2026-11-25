
import { Link } from 'react-router-dom'
import {
  HiShieldCheck,
  HiLocationMarker,
  HiMail,
  HiPhone
} from 'react-icons/hi'

function Footer() {
  return (
    <footer className="w-full bg-[#173D34] text-white mt-10 p-3">

      <div className="w-full px-6 md:px-10 lg:px-14 py-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <div className="flex items-center gap-2 mb-3">
              <HiShieldCheck className="text-3xl text-[#A7D8B5]" />
              <h2 className="text-2xl font-bold">SafeRoute</h2>
            </div>

            <p className="text-sm text-gray-300 leading-6 max-w-xs">
              Making every journey safer through community-powered
              road hazard reporting and safety awareness.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>

            <div className="flex flex-col gap-2.5 text-sm text-gray-300">
              <Link to="/" className="hover:text-[#A7D8B5] transition">Home</Link>
              <Link to="/login" className="hover:text-[#A7D8B5] transition">Login</Link>
              <Link to="/register" className="hover:text-[#A7D8B5] transition">Register</Link>
              <Link to="/dashboard" className="hover:text-[#A7D8B5] transition">Dashboard</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Our Features</h3>

            <div className="flex flex-col gap-2.5 text-sm text-gray-300">
              <p>Hazard Reporting</p>
              <p>Interactive Hazard Map</p>
              <p>Community Verification</p>
              <p>Weather & Emergency Alerts</p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <HiLocationMarker className="text-lg shrink-0" />
                Kerala, India
              </p>

              <p className="flex items-center gap-2">
                <HiMail className="text-lg shrink-0" />
                support@saferoute.com
              </p>

              <p className="flex items-center gap-2">
                <HiPhone className="text-lg shrink-0" />
                +91 98765 43210
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/20 mt-7 pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">

          <p className="text-sm text-gray-300 text-center">
            © 2026 SafeRoute. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Building safer roads, together.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
