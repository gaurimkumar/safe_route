
import { HiBell, HiLocationMarker, HiCheckCircle } from 'react-icons/hi'

function NotificationPanel() {
  return (
    <div className="bg-white rounded-xl border p-5 shadow-sm">

      <h3 className="font-bold text-gray-800 mb-5">
        Recent Notifications
      </h3>

  
      <div className="flex gap-3 py-4 border-b">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-orange-500 bg-orange-100">
          <HiLocationMarker />
        </div>

        <div>
          <h4 className="text-sm font-semibold">
            New hazard reported
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            A pothole was reported near MG Road.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            10 minutes ago
          </p>
        </div>
      </div>

   
      <div className="flex gap-3 py-4 border-b">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-green-600 bg-green-100">
          <HiCheckCircle />
        </div>

        <div>
          <h4 className="text-sm font-semibold">
            Report verified
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Your road damage report was approved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            2 hours ago
          </p>
        </div>
      </div>

   
      <div className="flex gap-3 py-4 last:border-0">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl text-blue-600 bg-blue-100">
          <HiBell />
        </div>

        <div>
          <h4 className="text-sm font-semibold">
            Nearby road alert
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            Road maintenance reported in your area.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Yesterday
          </p>
        </div>
      </div>

    </div>
  )
}

export default NotificationPanel
