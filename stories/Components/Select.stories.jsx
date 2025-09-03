import React, { useState } from 'react'
import Select from '../../components/ui/Select'

export default { title: 'Components/Select' }

export const Variants = () => {
  const [value, setValue] = useState('')
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-soft">
      <Select label="Country" value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="">Select Country</option>
        <option value="no">Norway</option>
        <option value="se">Sweden</option>
        <option value="dk">Denmark</option>
      </Select>
      <Select label="Disabled" disabled>
        <option>Option</option>
      </Select>
    </div>
  )
}

