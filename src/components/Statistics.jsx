
import { Card } from 'flowbite-react'
import { HiChartBar } from 'react-icons/hi'

function HistoricalStatistics() {
  return (
    <Card className="shadow-sm border border-gray-100 p-3">

      <h2 className="font-bold text-lg flex items-center gap-2 text-[#173D34]">
        <HiChartBar className="text-[#26745B] text-2xl" />
        Historical Hazard Statistics
      </h2>

      <div className="flex items-end justify-around gap-3 h-52 mt-8 border-b">

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '45%' }} />
          <span className="text-xs text-gray-500">Jan</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '65%' }} />
          <span className="text-xs text-gray-500">Feb</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '35%' }} />
          <span className="text-xs text-gray-500">Mar</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '85%' }} />
          <span className="text-xs text-gray-500">Apr</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '60%' }} />
          <span className="text-xs text-gray-500">May</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '95%' }} />
          <span className="text-xs text-gray-500">Jun</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '70%' }} />
          <span className="text-xs text-gray-500">Jul</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '55%' }} />
          <span className="text-xs text-gray-500">Aug</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '80%' }} />
          <span className="text-xs text-gray-500">Sep</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '40%' }} />
          <span className="text-xs text-gray-500">Oct</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '75%' }} />
          <span className="text-xs text-gray-500">Nov</span>
        </div>

        <div className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
          <div className="w-full max-w-10 bg-[#26745B] rounded-t-md" style={{ height: '90%' }} />
          <span className="text-xs text-gray-500">Dec</span>
        </div>

      </div>

      <p className="text-xs text-gray-400 mt-3">
        Illustrative monthly report statistics
      </p>

    </Card>
  )
}

export default HistoricalStatistics
