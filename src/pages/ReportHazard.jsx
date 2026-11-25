
import { Card } from 'flowbite-react'
import HazardForm from '../components/HazardForm'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ReportHazard() {
  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">Report a Road Hazard</h1>
        <p className="text-gray-500 mt-1">Help make roads safer by reporting dangerous conditions.</p>
      </div>

      <Card>
        <div className="flex items-center gap-3 border-b p-5">
          <div className="bg-green-100 text-[#26745B] p-3 rounded-xl">
           <FontAwesomeIcon icon={faPlus} />
          </div>
          <div>
            <h2 className="font-bold text-gray-800">Hazard Information</h2>
            <p className="text-xs text-gray-500">Provide details about the road hazard</p>
          </div>
        </div>

        <HazardForm />
      </Card>
    </div>
  )
}

export default ReportHazard
