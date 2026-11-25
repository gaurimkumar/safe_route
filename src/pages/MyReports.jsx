
import { Card, Button } from "flowbite-react";
import { HiLocationMarker, HiPencil, HiTrash } from "react-icons/hi";

function MyReports() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">My Reports</h1>
        <p className="text-gray-500 mt-1">
          Manage and track your submitted hazard reports.
        </p>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Card>
          <p className="text-gray-500 text-sm p-3">Total Reports</p>
          <h2 className="text-3xl font-bold p-3">3</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm p-3">Pending</p>
          <h2 className="text-3xl font-bold text-orange-500 p-3">1</h2>
        </Card>

        <Card>
          <p className="text-gray-500 text-sm p-3">Resolved</p>
          <h2 className="text-3xl font-bold text-green-600 p-3">1</h2>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">

        <Card className="p-2">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">SR001</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                Pending
              </span>
            </div>

            <h3 className="font-bold text-lg">Large Pothole</h3>

            <p className="text-sm text-gray-500 flex items-center gap-2">
              <HiLocationMarker className="text-[#26745B] text-lg" />
              MG Road, Kochi
            </p>

            <p className="text-xs text-gray-400">Reported on 24 Nov 2026</p>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <Button color="light" size="sm" className="flex-1">
                <HiPencil className="mr-1" /> Edit
              </Button>

              <Button color="failure" size="sm">
                <HiTrash />
              </Button>
            </div>
          </div>
        </Card>

   
        <Card className="p-2">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">SR002</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                Approved
              </span>
            </div>

            <h3 className="font-bold text-lg">Damaged Road</h3>

            <p className="text-sm text-gray-500 flex items-center gap-2">
              <HiLocationMarker className="text-[#26745B] text-lg" />
              Vyttila, Kochi
            </p>

            <p className="text-xs text-gray-400">Reported on 22 Nov 2026</p>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <Button color="light" size="sm" className="flex-1">
                <HiPencil className="mr-1" /> Edit
              </Button>

              <Button color="failure" size="sm">
                <HiTrash />
              </Button>
            </div>
          </div>
        </Card>

    
        <Card className="p-2">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-400">SR003</span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                Resolved
              </span>
            </div>

            <h3 className="font-bold text-lg">Water Logging</h3>

            <p className="text-sm text-gray-500 flex items-center gap-2">
              <HiLocationMarker className="text-[#26745B] text-lg" />
              Edappally, Kochi
            </p>

            <p className="text-xs text-gray-400">Reported on 18 Nov 2026</p>

            <div className="flex gap-3 pt-4 border-t border-gray-100">
              <Button color="light" size="sm" className="flex-1">
                <HiPencil className="mr-1" /> Edit
              </Button>

              <Button color="failure" size="sm">
                <HiTrash />
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}

export default MyReports;
