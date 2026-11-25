
import { Card, Button } from 'flowbite-react'
import SearchFilter from '../components/SearchFilter'
import { HiEye } from 'react-icons/hi'

function AllReports() {
  return (
    <div className="space-y-5">

      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">
          All Hazard Reports
        </h1>

        <p className="text-gray-500 mt-1">
          View community-submitted road hazard reports.
        </p>
      </div>

      <SearchFilter />

      <Card className="shadow-sm border border-gray-100 p-3">

        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold text-lg text-[#173D34]">
            Community Reports
          </h2>

          <span className="text-sm text-gray-500">
            5 Reports
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">

            <thead className="text-xs uppercase bg-gray-50 text-gray-700">
              <tr>
                <th className="px-6 py-4">Report ID</th>
                <th className="px-6 py-4">Hazard</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">

              {/* Report 1 */}
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR001</td>
                <td className="px-6 py-4">Large Pothole</td>
                <td className="px-6 py-4">Pothole</td>
                <td className="px-6 py-4">Kochi</td>
                <td className="px-6 py-4 whitespace-nowrap">24 Nov 2026</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button size="xs" color="light">
                    <HiEye className="mr-1 h-4 w-4" /> View
                  </Button>
                </td>
              </tr>

              {/* Report 2 */}
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR002</td>
                <td className="px-6 py-4">Road Damage</td>
                <td className="px-6 py-4">Road Damage</td>
                <td className="px-6 py-4">Trivandrum</td>
                <td className="px-6 py-4 whitespace-nowrap">23 Nov 2026</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button size="xs" color="light">
                    <HiEye className="mr-1 h-4 w-4" /> View
                  </Button>
                </td>
              </tr>

              {/* Report 3 */}
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR003</td>
                <td className="px-6 py-4">Water Logging</td>
                <td className="px-6 py-4">Water Logging</td>
                <td className="px-6 py-4">Calicut</td>
                <td className="px-6 py-4 whitespace-nowrap">22 Nov 2026</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    Resolved
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button size="xs" color="light">
                    <HiEye className="mr-1 h-4 w-4" /> View
                  </Button>
                </td>
              </tr>

              {/* Report 4 */}
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR004</td>
                <td className="px-6 py-4">Fallen Tree</td>
                <td className="px-6 py-4">Other</td>
                <td className="px-6 py-4">Kollam</td>
                <td className="px-6 py-4 whitespace-nowrap">21 Nov 2026</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button size="xs" color="light">
                    <HiEye className="mr-1 h-4 w-4" /> View
                  </Button>
                </td>
              </tr>

              {/* Report 5 */}
              <tr className="bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">SR005</td>
                <td className="px-6 py-4">Broken Streetlight</td>
                <td className="px-6 py-4">Other</td>
                <td className="px-6 py-4">Kochi</td>
                <td className="px-6 py-4 whitespace-nowrap">20 Nov 2026</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                    Approved
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Button size="xs" color="light">
                    <HiEye className="mr-1 h-4 w-4" /> View
                  </Button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </Card>
    </div>
  )
}

export default AllReports
