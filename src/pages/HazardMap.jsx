import { Card, Select, TextInput } from "flowbite-react";
import MapView from "../components/MapView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";

function HazardMap() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">
          Interactive Hazard Map
        </h1>
        <p className="text-gray-500 mt-1">
          Explore road hazards reported by the community.
        </p>
      </div>

      <Card>
        <div className="grid md:grid-cols-3 gap-4 p-3">
          <TextInput
            className=""
            icon={FaSearch}
            placeholder="       Search location..."
          />
          <Select>
            <option>All Hazard Categories</option>
            <option>Pothole</option>
            <option>Road Damage</option>
            <option>Water Logging</option>
          </Select>
          <Select>
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Resolved</option>
          </Select>
        </div>
      </Card>

      <Card className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-bold">Hazard Locations</h2>
          <span className="text-sm text-gray-500 flex items-center gap-1">
             <FontAwesomeIcon icon={faLocationDot} />
            Kochi, Kerala
          </span>
        </div>

        <MapView />
      </Card>
    </div>
  );
}

export default HazardMap;


