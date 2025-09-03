import React, { useState } from 'react'
import Textarea from '../../components/ui/Textarea'

export default { title: 'Components/Textarea' }

export const Basic = () => {
  const [value, setValue] = useState('')
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-soft">
      <Textarea label="Message" rows={4} placeholder="Type here…" value={value} onChange={(e) => setValue(e.target.value)} />
      <Textarea label="Disabled" rows={4} disabled placeholder="Disabled" />
    </div>
  )
}

