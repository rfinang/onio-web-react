import React, { useState } from 'react'
import Checkbox from '../../components/ui/Checkbox'

export default { title: 'Components/Checkbox' }

export const Variants = () => {
  const [a, setA] = useState(false)
  const [b, setB] = useState(true)
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-soft">
      <Checkbox label="Default" checked={a} onChange={(e) => setA(e.target.checked)} />
      <Checkbox label="Black variant" variant="black" checked={b} onChange={(e) => setB(e.target.checked)} />
      <Checkbox label="White variant" variant="white" />
    </div>
  )
}

