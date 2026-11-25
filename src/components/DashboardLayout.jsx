
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F7F9F7]">

      <div className="w-64 shrink-0">
        <Sidebar />
      </div>

      <div className="flex-1 min-w-0 flex flex-col">

        <Header />

        <main className="flex-1 min-h-0 overflow-y-auto">

          <div className="p-10">
            <Outlet />
          </div>

          <Footer />

        </main>

      </div>

    </div>
  )
}

export default DashboardLayout
