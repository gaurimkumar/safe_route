
import { Card, Button, TextInput } from 'flowbite-react'
import {
  HiCloud,
  HiLocationMarker,
  HiPhone,
  HiSearch,
  HiExclamationCircle,
  HiOutlineArrowRight
} from 'react-icons/hi'

function EmergencyWeather() {
  return (
    <div className="space-y-7">

      <div>
        <h1 className="text-2xl font-bold text-[#173D34]">
          Emergency & Weather
        </h1>
        <p className="text-gray-500 mt-1">
          Weather updates and emergency assistance.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#173D34]">
          <HiCloud className="text-[#26745B] text-2xl" />
          Weather Overview
        </h2>

        <Card className="shadow-sm border border-gray-100 p-3">
          <div className="flex flex-col lg:flex-row justify-between gap-6">

            <div className="flex justify-between items-center lg:w-1/3">
              <div>
                <p className="text-sm text-gray-500">Current Weather</p>
                <h2 className="text-5xl font-bold text-[#173D34] mt-3">
                  28°C
                </h2>
                <p className="text-gray-500 mt-2">Partly Cloudy</p>
                <p className="text-sm text-gray-400 mt-2 flex items-center gap-1">
                  <HiLocationMarker />
                  Kochi, Kerala
                </p>
              </div>

              <div className="text-6xl">🌤️</div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:w-1/2">

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Humidity</p>
                <h3 className="text-xl font-bold text-[#173D34] mt-2">70%</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Wind Speed</p>
                <h3 className="text-xl font-bold text-[#173D34] mt-2">12 km/h</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Rainfall</p>
                <h3 className="text-xl font-bold text-[#173D34] mt-2">10 mm</h3>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm text-gray-500">Last Updated</p>
                <h3 className="text-xl font-bold text-[#173D34] mt-2">10:30 AM</h3>
              </div>

            </div>
          </div>

          <div className="border-t pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
            <p className="text-sm text-gray-500">
              Want weather updates for your current location?
            </p>

            <Button size="sm" className="bg-[#26745B] p-2">
              <HiLocationMarker className="mr-2" />
              Use My Location
            </Button>
          </div>
        </Card>
      </div>

      <Card className="bg-orange-50 border border-orange-200 shadow-sm p-2">
        <div className="flex items-start gap-3">
          <HiExclamationCircle className="text-orange-500 text-3xl shrink-0" />

          <div>
            <h3 className="font-bold text-orange-800">
              Weather Advisory
            </h3>

            <p className="text-sm text-orange-700 mt-1">
              Rainy conditions may cause waterlogging and slippery roads.
              Drive carefully and avoid flooded areas.
            </p>
          </div>
        </div>
      </Card>

      <div>
        <h2 className="font-bold text-lg mb-4 flex items-center gap-2 text-[#173D34]">
          <HiPhone className="text-[#26745B] text-2xl" />
          Emergency Helplines
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">

          <Card className="shadow-sm border border-gray-100 p-3">
            <div className="text-3xl">👮</div>
            <h3 className="font-bold text-gray-800">Police</h3>
            <p className="text-sm text-gray-500">Emergency assistance</p>
            <h2 className="text-2xl font-bold text-[#26745B]">112</h2>
            <a >
              <Button size="sm" className="w-full bg-[#26745B] p-1">
                <HiPhone className="mr-2" />
                Call Now
              </Button>
            </a>
          </Card>

          <Card className="shadow-sm border border-gray-100 p-3">
            <div className="text-3xl">🚑</div>
            <h3 className="font-bold text-gray-800">Ambulance</h3>
            <p className="text-sm text-gray-500">Medical emergencies</p>
            <h2 className="text-2xl font-bold text-[#26745B]">108</h2>
            <a >
              <Button size="sm" className="w-full bg-[#26745B] p-1">
                <HiPhone className="mr-2" />
                Call Now
              </Button>
            </a>
          </Card>

          <Card className="shadow-sm border border-gray-100 p-3">
            <div className="text-3xl">🚒</div>
            <h3 className="font-bold text-gray-800">Fire Service</h3>
            <p className="text-sm text-gray-500">Fire and rescue</p>
            <h2 className="text-2xl font-bold text-[#26745B]">101</h2>
            <a >
              <Button size="sm" className="w-full bg-[#26745B] p-1">
                <HiPhone className="mr-2" />
                Call Now
              </Button>
            </a>
          </Card>

          <Card className="shadow-sm border border-gray-100 p-3">
            <div className="text-3xl">🆘</div>
            <h3 className="font-bold text-gray-800">Emergency Help</h3>
            <p className="text-sm text-gray-500">Unified emergency number</p>
            <h2 className="text-2xl font-bold text-[#26745B]">112</h2>
            <a >
              <Button size="sm" className="w-full bg-[#26745B] p-1">
                <HiPhone className="mr-2" />
                Call Now
              </Button>
            </a>
          </Card>

        </div>
      </div>

      <div>

        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-4">

          <div>
            <h2 className="font-bold text-lg text-[#173D34] flex items-center gap-2">
              <HiLocationMarker className="text-[#26745B] text-2xl" />
              Nearby Emergency Facilities
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Find hospitals, police stations and fire stations nearby.
            </p>
          </div>

          <Button className='p-2' color="light"  size="sm">
            <HiLocationMarker className="mr-2 " />
            Use My Location
          </Button>

        </div>

        
<Card className="shadow-sm border border-gray-100 mb-4 p-3">
  <div className="space-y-4">

    <div>
      <h3 className="font-semibold text-[#173D34]">
        Find Emergency Facilities
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        Search for nearby hospitals, police stations and fire stations.
      </p>
    </div>

    <TextInput
      icon={HiSearch}
      placeholder="     Search by facility name or location..."
      className="w-full"
    />

    <div>
      <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
        Filter by Category
      </p>

      <div className="flex flex-wrap gap-2">
        <button className="px-5 py-2 rounded-full bg-[#26745B] text-white text-sm font-medium shadow-sm">
          All Facilities
        </button>

        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-green-50 hover:text-[#26745B]">
          🏥 Hospitals
        </button>

        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-green-50 hover:text-[#26745B]">
          👮 Police Stations
        </button>

        <button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium hover:bg-green-50 hover:text-[#26745B]">
          🚒 Fire Stations
        </button>
      </div>
    </div>

  </div>
</Card>

        <Card className="shadow-sm border border-gray-100 p-3">
          <div className="space-y-5">

            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b pb-5">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-2xl">
                  🏥
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">City Hospital</h3>
                  <p className="text-sm text-gray-500">Hospital · Kochi</p>
                  <p className="text-xs text-gray-400 mt-1">2.5 km away</p>
                </div>
              </div>

              <Button color="light" size="sm">
                View Directions <HiOutlineArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Police Station */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 border-b pb-5">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                  👮
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">Central Police Station</h3>
                  <p className="text-sm text-gray-500">Police Station · Kochi</p>
                  <p className="text-xs text-gray-400 mt-1">1.2 km away</p>
                </div>
              </div>

              <Button color="light" size="sm">
                View Directions <HiOutlineArrowRight className="ml-2" />
              </Button>
            </div>

            {/* Fire Station */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
              <div className="flex gap-3 items-center">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-2xl">
                  🚒
                </div>

                <div>
                  <h3 className="font-bold text-gray-800">Fire and Rescue Station</h3>
                  <p className="text-sm text-gray-500">Fire Station · Kochi</p>
                  <p className="text-xs text-gray-400 mt-1">3.8 km away</p>
                </div>
              </div>

              <Button color="light" size="sm">
                View Directions <HiOutlineArrowRight className="ml-2" />
              </Button>
            </div>

          </div>
        </Card>

      </div>

    </div>
  )
}

export default EmergencyWeather
