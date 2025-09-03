import React from 'react'

const colorTokens = [
  { name: 'primary', figma: '$onio/color/primary', cssVar: '--onio-color-primary', tw: 'bg-primary', text: 'text-white' },
  { name: 'secondary', figma: '$onio/color/secondary', cssVar: '--onio-color-secondary', tw: 'bg-secondary', text: 'text-primary' },
  { name: 'accent', figma: '$onio/color/accent', cssVar: '--onio-color-accent', tw: 'bg-accent', text: 'text-white' },
  { name: 'muted', figma: '$onio/color/muted', cssVar: '--onio-color-muted', tw: 'bg-muted', text: 'text-white' },
  { name: 'background', figma: '$onio/color/background', cssVar: '--onio-color-background', tw: 'bg-background', text: 'text-primary' },
  { name: 'white', figma: '$onio/color/white', cssVar: '--onio-color-white', tw: 'bg-white', text: 'text-primary' },
  { name: 'alert', figma: '$onio/color/alert', cssVar: '--onio-color-alert', tw: 'bg-alert', text: 'text-white' },
]

function TokenRow({ token }) {
  const value = typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue(token.cssVar).trim() : ''
  const copy = (text) => navigator.clipboard && navigator.clipboard.writeText(text)
  return (
    <div className="grid grid-cols-12 items-center gap-4 py-2 border-b border-gray-200">
      <div className="col-span-3">
        <div className={`h-9 w-9 rounded ${token.tw} border`} />
      </div>
      <div className="col-span-3 text-sm">
        <button className="underline" onClick={() => copy(token.figma)}>{token.figma}</button>
      </div>
      <div className="col-span-3 text-sm">
        <code>{token.cssVar}</code>
        {value && <span className="ml-2 text-gray-500">{value}</span>}
      </div>
      <div className="col-span-3 text-sm">
        <code>{token.tw}</code>
      </div>
    </div>
  )
}

export default {
  title: 'Design System/Colors',
}

export const Palette = () => (
  <div className="p-6 bg-background min-h-screen">
    <h2 className="text-2xl font-semibold mb-4">Color Tokens</h2>
    <p className="text-sm text-gray-600 mb-6">Figma → CSS var → Tailwind class mapping. Click Figma token to copy.</p>
    <div className="bg-white rounded-lg p-4 shadow-soft">
      {colorTokens.map((t) => <TokenRow key={t.name} token={t} />)}
    </div>
  </div>
)

