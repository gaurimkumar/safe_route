
import { TextInput, Select } from 'flowbite-react'
import { HiSearch } from 'react-icons/hi'

function SearchFilter() {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <TextInput
        icon={HiSearch}
        placeholder="      Search by hazard or location..."
        className="flex-1 "
      />

      <Select>
        <option>All Categories</option>
        <option>Pothole</option>
        <option>Road Damage</option>
        <option>Water Logging</option>
        <option>Fallen Tree</option>
      </Select>

      <Select>
        <option>All Status</option>
        <option>Pending</option>
        <option>Approved</option>
        <option>Resolved</option>
      </Select>
    </div>
  )
}

export default SearchFilter
