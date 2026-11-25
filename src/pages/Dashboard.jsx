
import { Card, Button } from 'flowbite-react'
import {
  HiPlus
} from 'react-icons/hi'

import Statcard from '../components/Statcard'
import HazardCard from '../components/HazardCard'
import MapView from '../components/MapView'
import NotificationPanel from '../components/NotificationPanel'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="space-y-7">
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#173D34]">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Monitor road hazards and community safety.</p>
        </div>
        <Button className="bg-[#26745B]">
          <HiPlus className="mr-2" /> <Link to={'/report-hazard'}>Report Hazard</Link>
        </Button>
      </div>

     <Statcard/>

      <div className="grid xl:grid-cols-3 gap-5">
        <div className="xl:col-span-2 bg-white rounded-xl p-5 border">
          <div className="flex justify-between mb-5">
            <h2 className="font-bold text-gray-800">Recent Hazard Reports</h2>
            <span className="text-sm text-[#26745B]">View All</span>
          </div>
<div className="grid md:grid-cols-2 gap-4">
  <HazardCard />
  
</div>
        </div>

        <NotificationPanel />
      </div>

      <Card>
        <h2 className="font-bold text-gray-800 mb-4 p-3">Nearby Hazard Locations</h2>
        <MapView />
      </Card>
    </div>
  )
}

export default Dashboard
