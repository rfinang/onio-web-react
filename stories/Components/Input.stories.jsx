import React, { useState } from 'react'
import Input from '../../components/ui/Input'

export default { title: 'Components/Input' }

export const Variants = () => {
  const [value, setValue] = useState('')
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-soft">
      <Input label="Your name" placeholder="Jane Doe" value={value} onChange={(e) => setValue(e.target.value)} />
      <Input label="Email" type="email" placeholder="you@email.com" />
      <Input label="Disabled" disabled placeholder="Disabled" />
    </div>
  )
}

