import { HiLocationMarker, HiCalendar } from 'react-icons/hi'

function HazardCard() {
  return (
    <>
    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <img
        src="https://images.indianexpress.com/2025/07/Jaipur-Pothole.jpg"
        alt="Large pothole"
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-3">

        <div className="flex justify-between items-center gap-2">
          <h3 className="font-bold text-gray-800">Large Pothole</h3>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
            Pending
          </span>
        </div>

        <p className="text-sm text-gray-500">Road Damage</p>

        <p className="text-sm text-gray-600 flex gap-2">
          <HiLocationMarker className="text-[#26745B] text-lg" />
          MG Road, Kochi
        </p>

        <p className="text-sm text-gray-500 flex gap-2">
          <HiCalendar /> 24 Nov 2026
        </p>

      </div>
    </div>


    <div className="bg-white rounded-xl shadow-sm border overflow-hidden">

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9y3IBZJhy40SynEm9aabGSjWmTDvXqDfZ2WCIOrlXzuq0E9YtgOFz4ms&s=10"
        alt="Water logging"
        className="w-full h-40 object-cover"
      />

      <div className="p-4 space-y-3">

        <div className="flex justify-between items-center gap-2">
          <h3 className="font-bold text-gray-800">Water Logging</h3>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
            Approved
          </span>
        </div>

        <p className="text-sm text-gray-500">Water Logging</p>

        <p className="text-sm text-gray-600 flex gap-2">
          <HiLocationMarker className="text-[#26745B] text-lg" />
          Trivandrum
        </p>

        <p className="text-sm text-gray-500 flex gap-2">
          <HiCalendar /> 23 Nov 2026
        </p>

      </div>
    </div>
    </>
  )
}

export default HazardCard