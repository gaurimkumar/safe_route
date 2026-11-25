
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


function MapView() {

  return (
    <div className="relative h-80 overflow-hidden rounded-xl border border-gray-200">

      <img
        src="https://media.helsingborg.se/uploads/networks/1/2016/11/kartor_specialkomponeradkarta_1920x1080_sbf.jpg"
        alt="street map"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/10"></div>

      <Link to={'/hazard-details'}><button
        
        title="View Large Pothole"
        className="absolute top-1/3 left-1/4 text-red-600 text-3xl drop-shadow-lg cursor-pointer hover:scale-125 transition"
      >
        <FontAwesomeIcon icon={faLocationDot} />
      </button></Link>

      <Link to={'/hazard-details'}>
      <button  
        title="View Road Damage"
        className="absolute top-1/2 left-2/3 text-orange-500 text-3xl drop-shadow-lg cursor-pointer hover:scale-125 transition"
      >
        <FontAwesomeIcon icon={faLocationDot} />
      </button>
      </Link>

      <Link to={'/hazard-details'}>
      <button
        title="View Resolved Hazard"
        className="absolute top-1/4 right-1/4 text-green-600 text-3xl drop-shadow-lg cursor-pointer hover:scale-125 transition"
      >
        <FontAwesomeIcon icon={faLocationDot} />
      </button>
      </Link>

      <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg text-xs space-y-2">

        <p className="font-bold text-gray-800">
          Hazard Locations
        </p>

        <p className="text-red-600">
          ● High Risk
        </p>

        <p className="text-orange-500">
          ● Medium Risk
        </p>

        <p className="text-green-600">
          ● Resolved
        </p>

      </div>

    </div>
  )
}

export default MapView
