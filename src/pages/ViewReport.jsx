
import { Card, Button } from 'flowbite-react'

import {
  HiLocationMarker,
  HiCalendar,
  HiUser,
  HiMail,
  HiPhone,
  HiCheckCircle,
  HiXCircle,
  HiArrowLeft,
  HiPaperAirplane,
  HiOfficeBuilding,
  HiClipboardCheck
} from 'react-icons/hi'

import { Link } from 'react-router-dom'

function ViewReport() {
  return (
    <div className="space-y-5">

      <div className="flex items-center gap-3">
        <Link to="/admin" className="text-[#26745B] hover:text-[#173D34]">
          <HiArrowLeft className="text-2xl" />
        </Link>

        <div>
          <h1 className="text-2xl font-bold text-[#173D34]">
            Report Details
          </h1>
          <p className="text-gray-500 mt-1">
            Review and manage the submitted hazard report.
          </p>
        </div>
      </div>

      <Card className="shadow-sm border border-gray-100 p-4">

        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-bold text-[#173D34]">
              Large Pothole
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Report ID: SR001
            </p>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
            Pending
          </span>
        </div>

        <img
          src="https://images.squarespace-cdn.com/content/v1/573365789f726693272dc91a/1704992146415-CI272VYXPALWT52IGLUB/AdobeStock_201419293.jpeg?format=1500w"
          alt="Road hazard"
          className="w-full h-100 object-cover rounded-xl mb-5"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <p className="text-sm text-gray-500">Hazard Category</p>
            <p className="font-semibold text-gray-800">Pothole</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Reported By</p>
            <p className="font-semibold text-gray-800">Arun Kumar</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <HiLocationMarker /> Location
            </p>
            <p className="font-semibold text-gray-800">MG Road, Kochi</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <HiCalendar /> Reported Date
            </p>
            <p className="font-semibold text-gray-800">24 Nov 2026</p>
          </div>

          <div>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <HiUser /> Reporter Email
            </p>
            <p className="font-semibold text-gray-800">arun@gmail.com</p>
          </div>

        </div>

        <div className="border-t pt-4 mt-4">
          <h3 className="font-semibold text-gray-800 mb-2">
            Description
          </h3>

          <p className="text-sm text-gray-600 leading-6">
            A large pothole has developed on MG Road, Kochi.
            It is causing difficulty for vehicles and may lead
            to accidents, especially during rainy weather.
          </p>
        </div>

      </Card>

      <Card className="shadow-sm border border-gray-100 p-4">

        <h2 className="text-lg font-bold text-[#173D34]">
          Admin Review
        </h2>

        <p className="text-sm text-gray-500 mt-1 mb-4">
          Review the report and decide whether to approve or reject it.
        </p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Admin Remarks
          </label>

          <textarea
            rows="4"
            placeholder="Enter your remarks here..."
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-[#26745B] focus:border-[#26745B]"
          />
        </div>

        <div className="flex flex-wrap gap-3 mt-4">

          <Button color="success">
            <HiCheckCircle className="mr-2 h-5 w-5" />
            Approve Report
          </Button>

          <Button color="failure">
            <HiXCircle className="mr-2 h-5 w-5" />
            Reject Report
          </Button>

        </div>

      </Card>

      <Card className="shadow-sm border border-gray-100 p-4">

        <div className="flex items-center gap-3 mb-2">
          <div className="bg-green-100 p-3 rounded-lg">
            <HiPaperAirplane className="text-2xl text-[#26745B]" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-[#173D34]">
              Forward Report to Authority
            </h2>

            <p className="text-sm text-gray-500">
              Send approved hazard reports to the responsible department.
            </p>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Responsible Department
          </label>

          <select className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-[#26745B] focus:border-[#26745B]">
            <option value="">Select Department</option>
            <option value="municipality">Municipal Corporation</option>
            <option value="pothole">Road Maintenance Department</option>
            <option value="pwd">Public Works Department (PWD)</option>
            <option value="traffic">Traffic Police Department</option>
          </select>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mt-4 space-y-3">

          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
            <HiOfficeBuilding className="text-[#26745B] text-lg" />
            Authority Contact Details
          </h3>

          <p className="text-sm text-gray-500">
            Select a department to view its contact details.
          </p>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HiMail className="text-[#26745B] text-lg" />
            Department Email: Not selected
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <HiPhone className="text-[#26745B] text-lg" />
            Contact Number: Not selected
          </div>

        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Forwarding Remarks
          </label>

          <textarea
            rows="3"
            placeholder="Add details or instructions for the authority..."
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-[#26745B] focus:border-[#26745B]"
          />
        </div>

        <div className="flex items-start gap-3 bg-orange-50 border border-orange-100 rounded-lg p-3 mt-4">
          <HiClipboardCheck className="text-orange-600 text-xl mt-1" />

          <div>
            <p className="font-semibold text-sm text-orange-800">
              Awaiting Approval
            </p>

            <p className="text-xs text-orange-700 mt-1">
              This report must be approved by the admin before it can be forwarded to an authority.
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <Button color="success" disabled>
            <HiPaperAirplane className="mr-2 h-4 w-4" />
            Forward Report
          </Button>
        </div>

      </Card>

    </div>
  )
}

export default ViewReport
