
import { Button, Card } from 'flowbite-react'
import {
  HiShieldCheck,
  HiLocationMarker,
  HiCamera,
  HiMap,
  HiCloud,
  HiBell,
  HiCheckCircle,
  HiArrowRight,
  HiMenuAlt3,
  HiGlobeAlt,
  HiUsers,
  HiClipboardCheck
} from 'react-icons/hi'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className="min-h-screen bg-[#F7FAF7] text-gray-800">

      <nav className="bg-white border-b border-gray-100 px-6 md:px-16 py-5 flex justify-between items-center sticky top-0 z-50">

        <Link to="/" className="flex items-center gap-2">
          <div className="bg-[#173D34] p-2 rounded-xl">
            <HiShieldCheck className="text-2xl text-white" />
          </div>
          <span className="text-2xl font-bold text-[#173D34]">
            SafeRoute
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#about" className="hover:text-[#26745B]">About</a>
          <a href="#features" className="hover:text-[#26745B]">Features</a>
          <a href="#how-it-works" className="hover:text-[#26745B]">How It Works</a>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login">
            <Button color="light" className="border border-[#26745B] text-[#26745B] hover:bg-green-50">
              Login
            </Button>
          </Link>

          <Link to="/register">
            <Button className="bg-[#26745B] hover:bg-[#173D34]">
              Get Started
            </Button>
          </Link>
        </div>

      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF4ED] via-[#F7FAF7] to-[#E0EFE5] px-6 md:px-16 py-20 md:py-28">

        <div className="absolute -top-24 -right-20 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#26745B]/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-flex items-center gap-2 bg-white border border-green-100 text-[#26745B] px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <HiShieldCheck className="text-lg" />
              Smart Road Safety Platform
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-[#173D34] mt-7 leading-tight">
              Making Every Journey
              <span className="block text-[#26745B]">
                Safer Together.
              </span>
            </h1>

            <p className="text-gray-600 mt-6 leading-8 text-base md:text-lg max-w-xl">
              A smarter way to identify road hazards, report unsafe
              conditions and build safer communities through technology
              and public participation.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link to="/register">
                <Button className="bg-[#26745B] hover:bg-[#173D34] px-5 py-2.5 shadow-md">
                  Get Started
                  <HiArrowRight className="ml-2 text-lg" />
                </Button>
              </Link>

              <a href="#about">
                <Button color="light" className="border border-gray-300 px-5 py-2.5 hover:bg-white">
                  Explore SafeRoute
                </Button>
              </a>

            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-green-600 text-lg" />
                Easy Hazard Reporting
              </div>

              <div className="flex items-center gap-2">
                <HiCheckCircle className="text-green-600 text-lg" />
                Community Driven
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center min-h-[340px]">

            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-[#26745B]/15"></div>
            <div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full border border-[#26745B]/20"></div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-[#173D34] rounded-[40px] rotate-3 shadow-2xl flex items-center justify-center">

              <div className="absolute inset-4 border border-white/20 rounded-[30px]"></div>

              <div className="text-center -rotate-3">
                <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center mx-auto">
                  <HiShieldCheck className="text-7xl text-white" />
                </div>

                <h2 className="text-3xl font-bold text-white mt-5">
                  SafeRoute
                </h2>

                <p className="text-green-100 text-sm mt-2">
                  Safer Roads, Better Communities
                </p>
              </div>

              <div className="absolute -top-6 -right-7 bg-white rounded-2xl p-4 shadow-xl rotate-3">
                <HiLocationMarker className="text-3xl text-red-500" />
                <p className="text-xs font-semibold text-gray-700 mt-1">
                  Report Hazards
                </p>
              </div>

              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl p-4 shadow-xl -rotate-3">
                <HiCheckCircle className="text-3xl text-green-600" />
                <p className="text-xs font-semibold text-gray-700 mt-1">
                  Safer Journeys
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="about" className="px-6 md:px-16 py-20 bg-white">

        <div className="max-w-4xl mx-auto text-center">

          <span className="text-[#26745B] text-sm font-bold tracking-widest">
            ABOUT SAFEROUTE
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#173D34] mt-4">
            Building Safer Roads Through Technology
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            Road hazards such as potholes, damaged roads, waterlogging
            and accident-prone areas can put lives at risk. SafeRoute
            provides a platform where citizens can report these issues
            and help communities and administrators identify, verify
            and manage road safety problems.
          </p>

        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-5 mt-14">

          <div className="bg-[#F4F8F4] p-7 rounded-2xl text-center">
            <HiUsers className="text-4xl text-[#26745B] mx-auto" />
            <h3 className="font-bold text-[#173D34] mt-4">
              Community Participation
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Encourage people to contribute to safer roads.
            </p>
          </div>

          <div className="bg-[#F4F8F4] p-7 rounded-2xl text-center">
            <HiGlobeAlt className="text-4xl text-[#26745B] mx-auto" />
            <h3 className="font-bold text-[#173D34] mt-4">
              Location Awareness
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Identify hazards and understand road conditions.
            </p>
          </div>

          <div className="bg-[#F4F8F4] p-7 rounded-2xl text-center">
            <HiClipboardCheck className="text-4xl text-[#26745B] mx-auto" />
            <h3 className="font-bold text-[#173D34] mt-4">
              Better Management
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Help administrators review and manage reports.
            </p>
          </div>

        </div>

      </section>

      <section id="features" className="px-6 md:px-16 py-20 bg-[#F7FAF7]">

        <div className="text-center mb-14">
          <span className="text-[#26745B] text-sm font-bold tracking-widest">
            OUR FEATURES
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#173D34] mt-4">
            Everything You Need for Road Safety
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover the tools that help users report hazards,
            stay informed and make roads safer.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

          <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <HiLocationMarker className="text-3xl text-[#26745B]" />
            </div>
            <h3 className="font-bold text-lg text-[#173D34]">
              Hazard Reporting
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Report potholes, damaged roads and other road hazards
              with location details and descriptions.
            </p>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <HiCamera className="text-3xl text-[#26745B]" />
            </div>
            <h3 className="font-bold text-lg text-[#173D34]">
              Image Upload
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Attach photographs to help identify and understand
              reported road problems.
            </p>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <HiMap className="text-3xl text-[#26745B]" />
            </div>
            <h3 className="font-bold text-lg text-[#173D34]">
              Interactive Hazard Map
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Explore reported road hazards and identify risky
              locations on a map.
            </p>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <HiCheckCircle className="text-3xl text-[#26745B]" />
            </div>
            <h3 className="font-bold text-lg text-[#173D34]">
              Community Verification
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Help verify road hazard reports and contribute
              to community road safety.
            </p>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <HiCloud className="text-3xl text-[#26745B]" />
            </div>
            <h3 className="font-bold text-lg text-[#173D34]">
              Weather & Emergency
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Access weather information and find nearby
              emergency services.
            </p>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl p-4">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
              <HiBell className="text-3xl text-[#26745B]" />
            </div>
            <h3 className="font-bold text-lg text-[#173D34]">
              Safety Notifications
            </h3>
            <p className="text-gray-500 text-sm leading-7">
              Stay informed about nearby road hazards and
              important safety updates.
            </p>
          </Card>

        </div>
      </section>

      <section id="how-it-works" className="bg-white px-6 md:px-16 py-20">

        <div className="text-center mb-14">
          <span className="text-[#26745B] text-sm font-bold tracking-widest">
            SIMPLE PROCESS
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-[#173D34] mt-4">
            How SafeRoute Works
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8">

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-100 text-[#26745B] flex items-center justify-center text-2xl font-bold mx-auto">
              01
            </div>
            <h3 className="font-bold text-[#173D34] mt-5">
              Report a Hazard
            </h3>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Register and submit road hazard details with photographs
              and location information.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-100 text-[#26745B] flex items-center justify-center text-2xl font-bold mx-auto">
              02
            </div>
            <h3 className="font-bold text-[#173D34] mt-5">
              Review and Verify
            </h3>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Community members can verify reports and administrators
              review submitted information.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-green-100 text-[#26745B] flex items-center justify-center text-2xl font-bold mx-auto">
              03
            </div>
            <h3 className="font-bold text-[#173D34] mt-5">
              Improve Road Safety
            </h3>
            <p className="text-sm text-gray-500 mt-3 leading-6">
              Approved hazards can be forwarded to responsible
              authorities for necessary action.
            </p>
          </div>

        </div>
      </section>

      <section className="px-6 md:px-16 py-20 bg-[#173D34]">

        <div className="max-w-4xl mx-auto text-center">

          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto">
            <HiShieldCheck className="text-4xl text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-6">
            Be Part of a Safer Road Community
          </h2>

          <p className="text-green-100 mt-5 leading-7 max-w-2xl mx-auto">
            Join SafeRoute, report road hazards and help make
            everyday journeys safer for everyone.
          </p>

          <Link to="/register">
            <Button className="mt-8 bg-white text-[#173D34] hover:bg-green-100 px-6 py-2">
              Join SafeRoute
              <HiArrowRight className="ml-2 text-lg" />
            </Button>
          </Link>

        </div>
      </section>

      <footer className="bg-[#102D27] text-gray-300 px-6 md:px-16 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">

          <div>
            <div className="flex items-center gap-2">
              <HiShieldCheck className="text-3xl text-green-400" />
              <h2 className="text-2xl font-bold text-white">
                SafeRoute
              </h2>
            </div>

            <p className="text-sm text-gray-400 mt-3 max-w-sm leading-6">
              Making roads safer through technology, community
              participation and better hazard management.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="hover:text-green-400">About Us</a>
              <a href="#features" className="hover:text-green-400">Features</a>
              <a href="#how-it-works" className="hover:text-green-400">How It Works</a>
              <Link to="/login" className="hover:text-green-400">Login</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Get Started
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Join the SafeRoute community today.
            </p>
            <Link to="/register" className="text-green-400 font-semibold text-sm hover:text-white">
              Create an Account →
            </Link>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center text-xs text-gray-400">
          © 2026 SafeRoute. All rights reserved.
        </div>

      </footer>

    </div>
  )
}

export default Home
