
import { Card, Button } from 'flowbite-react'
import {
  HiLocationMarker,
  HiCalendar,
  HiThumbUp,
  HiFlag,
  HiCheckCircle,
  HiXCircle
} from 'react-icons/hi'
import { Link } from 'react-router-dom'

function HazardDetails() {
  return (
    <div className="space-y-5">

      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">
          Hazard Details
        </h1>
        <p className="text-gray-500 mt-1">
          View road hazard details and help verify the report.
        </p>
      </div>

      <Card className="shadow-sm border border-gray-100 p-5">
        <div className="flex justify-between items-center gap-3">
          <h2 className="text-lg font-bold text-[#173D34]">
            Large Pothole
          </h2>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
            Pending
          </span>
        </div>

        <img
          src="https://content.9news.com/photo/2015/03/03/635610111904845997-Still0303-00001_1619058_ver1.0.jpg"
          alt="Road hazard"
          className="w-full h-100 object-cover rounded-xl"
        />

        <div className="space-y-3 text-sm text-gray-600">
          <p><strong>Report ID:</strong> SR001</p>
          <p><strong>Category:</strong> Pothole</p>

          <p className="flex items-center gap-2">
            <HiLocationMarker className="text-[#26745B] text-lg" />
            MG Road, Kochi, Kerala
          </p>

          <p className="flex items-center gap-2">
            <HiCalendar />
            24 November 2026
          </p>

          <p><strong>Reported By:</strong> Arun Kumar</p>

          <p>
            <strong>Description:</strong> A large pothole is present
            on the road, making it difficult for vehicles to pass safely.
          </p>
        </div>
      </Card>

      <Card className="shadow-sm border border-gray-100 p-3">
        <div>
          <h2 className="text-lg font-bold text-[#173D34]">
            Community Verification
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Have you noticed this road hazard? Share your feedback
            to help verify this report.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-5 text-center">
            <HiThumbUp className="text-3xl text-green-600 mx-auto" />
            <h3 className="text-2xl font-bold text-green-700 mt-2">
              24
            </h3>
            <p className="text-sm text-gray-600">
              Confirmed
            </p>
          </div>

          <div className="bg-red-50 rounded-xl p-5 text-center">
            <HiFlag className="text-3xl text-red-500 mx-auto" />
            <h3 className="text-2xl font-bold text-red-600 mt-2">
              3
            </h3>
            <p className="text-sm text-gray-600">
              Reported Incorrect
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button className="bg-[#26745B] hover:bg-[#173D34]">
            <HiCheckCircle className="mr-2 h-5 w-5" />
            Confirm Hazard
          </Button>

          <Button
            color="light"
            className="border border-red-300 text-red-600 hover:bg-red-50"
          >
            <HiXCircle className="mr-2 h-5 w-5" />
            Report as Incorrect
          </Button>
        </div>

        <p className="text-xs text-gray-400">
          Note: You cannot verify your own reported hazard.
        </p>
      </Card>

      <Link
        to="/hazard-map"
        className="inline-block text-[#26745B] font-semibold hover:underline"
      >
        ← Back to Hazard Map
      </Link>

    </div>
  )
}

export default HazardDetails
