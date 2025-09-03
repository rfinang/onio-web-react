import React from 'react'
import Button from '../../components/ui/Button'

export default { title: 'Components/Button' }

export const Variants = () => (
  <div className="p-6 bg-background min-h-screen">
    <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-soft">
      {['primary','secondary','white','accent','outline','outline-white','ghost','danger','link','icon'].map((variant) => (
        <div key={variant} className="space-x-3">
          <Button variant={variant}> {variant} </Button>
          {variant !== 'icon' && <Button variant={variant} size="large"> {variant} lg</Button>}
        </div>
      ))}
    </div>
  </div>
)

