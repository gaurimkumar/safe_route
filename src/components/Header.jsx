
import { Avatar } from 'flowbite-react'
import { HiBell, HiMenuAlt2, HiSearch } from 'react-icons/hi'

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-4">

        <button className="text-2xl text-gray-600 lg:hidden">
          <HiMenuAlt2 />
        </button>

        <div>
          <h2 className="text-lg font-bold text-[#173D34]">
            Welcome to SafeRoute
          </h2>

          <p className="text-sm text-gray-500">
            Road Safety Management Platform
          </p>
        </div>

      </div>

      <div className="flex items-center gap-5">

        <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
          <HiSearch className="text-gray-400 text-xl" />

          <input
            type="text"
            placeholder="Search here..."
            className="bg-transparent outline-none border-none text-sm ml-2 w-36"
          />
        </div>

        <div className="relative cursor-pointer">
          <HiBell className="text-2xl text-gray-600" />

          <span className="absolute -top-1 -right-1 bg-red-500 w-2.5 h-2.5 rounded-full"></span>
        </div>

        <div className="flex items-center gap-3">

          <Avatar rounded size="md" />

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-800">
              Admin User
            </p>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </header>
  )
}

export default Header
