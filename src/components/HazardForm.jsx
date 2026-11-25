import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextInput, Textarea, Select, Label, Button } from "flowbite-react";

import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";

function HazardForm() {
  return (
    <form className="space-y-5 p-5">
      <div>
        <Label value="Hazard Title" />
        <TextInput placeholder=" Enter hazard title" />
      </div>
      <div>
        <Label value=" Hazard Category" />
        <Select>
          <option>Select category</option>
          <option>Pothole</option>
          <option>Road Damage</option>
          <option>Water Logging</option>
          <option>Fallen Tree</option>
          <option>Accident Prone Area</option>
          <option>Other</option>
        </Select>
      </div>
      <div>
        <Label value="Description" />
        <Textarea rows={4} placeholder=" Describe the road hazard..." />
      </div>
      
      <div>
        <Label value="Location" />
        <TextInput placeholder=" Enter location or area name" />

        <button
          type="button"
          className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#26745B] hover:text-[#173D34]"
        >
          <FontAwesomeIcon icon={faLocationCrosshairs} />
          Use My Current Location
        </button>
      </div>
    
      <div>

        <label htmlFor="pic">
          <div className="border-2 border-dashed rounded-xl p-8 text-center mt-2">
            <FontAwesomeIcon
              className="text-4xl text-gray-400 mx-auto"
              icon={faImage}
            />
            <p className="text-sm text-gray-500 mt-2">
              Choose an image of the hazard
            </p>
            <input
              type="file"
              accept="image/*"
              id="pic"
              className="mt-4 text-sm max-w-full"
            />
          </div>
        </label>
      </div>
      <Button type="button" className="w-full bg-[#26745B]">
        Submit Hazard Report
      </Button>
    </form>
  );
}

export default HazardForm;
