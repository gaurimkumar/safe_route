
import { Card } from 'flowbite-react'
import {
  HiEye
} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Statistics from '../components/Statistics'
import Statcard from '../components/Statcard'


function AdminDashboard() {
 

  return (
    <div className="space-y-7">

      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 mt-1">
          Monitor and manage SafeRoute activities.
        </p>
      </div>

     <Statcard/>

     <Statistics />

      <Card className="shadow-sm border border-gray-100 p-3">

        <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
          <div>
            <h2 className="font-bold text-lg text-[#173D34]">
              Recent Hazard Reports
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Review and manage submitted hazard reports.
            </p>
          </div>

          <button
            
            className="text-sm font-semibold text-[#26745B] hover:underline"
          >
            <Link to={'/reports'}>View All Reports</Link>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-xs uppercase bg-gray-50 text-gray-700">
              <tr>
                <th className="px-6 py-4">Report ID</th>
                <th className="px-6 py-4">Hazard</th>
                <th className="px-6 py-4">Reported By</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">

              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR001</td>
                <td className="px-6 py-4">Large Pothole</td>
                <td className="px-6 py-4">Arun</td>
                <td className="px-6 py-4">Kochi</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">Pending</span>
                </td>
                <td className="px-6 py-4">
                  <button  className="inline-flex items-center gap-1 text-[#26745B] font-semibold hover:underline">
                    <HiEye className="text-lg" /><Link to={'/view-report'}>View</Link>
                  </button>
                </td>
              </tr>

              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR002</td>
                <td className="px-6 py-4">Road Damage</td>
                <td className="px-6 py-4">Anu</td>
                <td className="px-6 py-4">Trivandrum</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">Approved</span>
                </td>
                <td className="px-6 py-4">
                  <button  className="inline-flex items-center gap-1 text-[#26745B] font-semibold hover:underline">
                    <HiEye className="text-lg" /><Link to={'/view-report'}>View</Link>
                  </button>
                </td>
              </tr>

              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR003</td>
                <td className="px-6 py-4">Water Logging</td>
                <td className="px-6 py-4">Rahul</td>
                <td className="px-6 py-4">Calicut</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Resolved</span>
                </td>
                <td className="px-6 py-4">
                  <button  className="inline-flex items-center gap-1 text-[#26745B] font-semibold hover:underline">
                    <HiEye className="text-lg" /> <Link to={'/view-report'}>View</Link>
                  </button>
                </td>
              </tr>

              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR004</td>
                <td className="px-6 py-4">Fallen Tree</td>
                <td className="px-6 py-4">Meera</td>
                <td className="px-6 py-4">Kollam</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">Pending</span>
                </td>
                <td className="px-6 py-4">
                  <button  className="inline-flex items-center gap-1 text-[#26745B] font-semibold hover:underline">
                    <HiEye className="text-lg" /> <Link to={'/view-report'}>View</Link>
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </Card>

    </div>
  )
}

export default AdminDashboard
