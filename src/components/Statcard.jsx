
import { Card } from 'flowbite-react'
import { HiCheckCircle, HiClock, HiDocumentText, HiUsers } from 'react-icons/hi'

function Statcard() {
  return (
   <>
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
    
            <Card className="shadow-sm p-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <h2 className="text-3xl font-bold mt-3">1,250</h2>
                  <p className="text-xs text-green-600 mt-2">Registered users</p>
                </div>
                <div className="bg-blue-100 text-blue-600 p-3 rounded-xl text-2xl">
                  <HiUsers />
                </div>
              </div>
            </Card>
    
            <Card className="shadow-sm p-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Reports</p>
                  <h2 className="text-3xl font-bold mt-3">248</h2>
                  <p className="text-xs text-green-600 mt-2">Community reports</p>
                </div>
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl text-2xl">
                  <HiDocumentText />
                </div>
              </div>
            </Card>
    
            <Card className="shadow-sm p-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Pending Reports</p>
                  <h2 className="text-3xl font-bold mt-3">56</h2>
                  <p className="text-xs text-orange-600 mt-2">Awaiting review</p>
                </div>
                <div className="bg-orange-100 text-orange-600 p-3 rounded-xl text-2xl">
                  <HiClock />
                </div>
              </div>
            </Card>
    
            <Card className="shadow-sm p-2">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Resolved Reports</p>
                  <h2 className="text-3xl font-bold mt-3">172</h2>
                  <p className="text-xs text-green-600 mt-2">Successfully resolved</p>
                </div>
                <div className="bg-green-100 text-green-600 p-3 rounded-xl text-2xl">
                  <HiCheckCircle />
                </div>
              </div>
            </Card>
    
          </div>
   </>
    
  )
}

export default Statcard
