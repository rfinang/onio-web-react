import React from 'react'

const spacing = [
  { key: 'xs', px: '4px' },
  { key: 'sm', px: '8px' },
  { key: 'md', px: '16px' },
  { key: 'lg', px: '24px' },
  { key: 'xl', px: '32px' },
  { key: '2xl', px: '48px' },
]

export default {
  title: 'Design System/Spacing',
}

export const Scale = () => (
  <div className="p-6 bg-background min-h-screen">
    <h2 className="text-2xl font-semibold mb-4">Spacing Tokens</h2>
    <div className="grid sm:grid-cols-2 gap-6">
      {spacing.map((s) => (
        <div key={s.key} className="bg-white rounded-lg p-4 shadow-soft">
          <div className="flex items-center mb-3">
            <div className={`h-4 bg-primary mr-3`} style={{ width: `var(--onio-spacing-${s.key})` }} />
            <div className="text-sm text-gray-600">--onio-spacing-{s.key} ({s.px})</div>
          </div>
          <div className="text-sm text-gray-700">Tailwind: <code>p-{s.key}</code>, <code>m-{s.key}</code>, <code>gap-{s.key}</code></div>
          <div className="text-sm text-gray-700">Figma: <code>$onio/spacing/{s.key}</code></div>
        </div>
      ))}
    </div>
  </div>
)

