import React from 'react'
import Typography from '../../components/ui/Typography'

const headings = ['hero','h1','h2','h3','h4','h5','h6']
const bodies = ['body-xl','body-large','body','body-small','body-xs']

export default { title: 'Design System/Typography' }

export const Headings = () => (
  <div className="p-6 bg-background min-h-screen">
    <h2 className="text-2xl font-semibold mb-4">Headings</h2>
    <div className="space-y-4 bg-white rounded-lg p-6 shadow-soft">
      {headings.map((v) => (
        <div key={v} className="border-b last:border-0 pb-4">
          <div className="text-xs text-gray-500 mb-1">variant: <code>{v}</code></div>
          <Typography variant={v}>The quick brown fox jumps over the lazy dog</Typography>
        </div>
      ))}
    </div>
  </div>
)

export const BodyText = () => (
  <div className="p-6 bg-background min-h-screen">
    <h2 className="text-2xl font-semibold mb-4">Body Text</h2>
    <div className="space-y-4 bg-white rounded-lg p-6 shadow-soft">
      {bodies.map((v) => (
        <div key={v} className="border-b last:border-0 pb-4">
          <div className="text-xs text-gray-500 mb-1">variant: <code>{v}</code></div>
          <Typography variant={v}>
            Typography variant {v}. The quick brown fox jumps over the lazy dog.
          </Typography>
        </div>
      ))}
    </div>
  </div>
)

