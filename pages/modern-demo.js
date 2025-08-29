import React from 'react'
import Button from '../components/modern/Button'

/**
 * Modern Demo Page
 * 
 * This page demonstrates:
 * - Modern Tailwind components working alongside existing styled-components
 * - Figma Variables integration through CSS custom properties  
 * - Design system consistency
 * - Safe coexistence of old and new approaches
 */

export default function ModernDemo() {
  const handleButtonClick = (variant) => {
    alert(`${variant} button clicked! 🎉`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-onio-neutral to-white">
      {/* Header */}
      <div className="bg-white shadow-onio-light">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-onio-heading text-3xl font-bold text-onio-dark">
            🚀 Modern Component Demo
          </h1>
          <p className="text-onio-body mt-2">
            Showcasing Tailwind CSS + Figma Variables integration
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Button Showcase */}
        <section className="card-onio mb-12">
          <h2 className="text-onio-heading text-2xl mb-6">Modern Button Components</h2>
          
          <div className="space-y-6">
            {/* Primary Buttons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-onio-dark">Primary Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="small"
                  onClick={() => handleButtonClick('Primary Small')}
                >
                  Small Primary
                </Button>
                <Button 
                  variant="primary" 
                  size="medium"
                  onClick={() => handleButtonClick('Primary Medium')}
                >
                  Medium Primary
                </Button>
                <Button 
                  variant="primary" 
                  size="large"
                  onClick={() => handleButtonClick('Primary Large')}
                >
                  Large Primary
                </Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-onio-dark">Secondary & Outline</h3>
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="secondary"
                  onClick={() => handleButtonClick('Secondary')}
                >
                  Secondary
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleButtonClick('Outline')}
                >
                  Outline
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => handleButtonClick('Ghost')}
                >
                  Ghost
                </Button>
              </div>
            </div>

            {/* Disabled State */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-onio-dark">Disabled States</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" disabled>
                  Disabled Primary
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Design System Info */}
        <section className="card-onio mb-12">
          <h2 className="text-onio-heading text-2xl mb-6">Figma Variables Integration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-onio-dark">Color Tokens</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-onio-primary rounded-md border"></div>
                  <span className="text-onio-body">--onio-primary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-onio-secondary rounded-md border"></div>
                  <span className="text-onio-body">--onio-secondary</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-onio-accent rounded-md border"></div>
                  <span className="text-onio-body">--onio-accent</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-onio-dark">Implementation Status</h3>
              <ul className="space-y-2 text-onio-body">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  Tailwind CSS v3.4 integrated
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  CSS Custom Properties configured
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✅</span>
                  Design system tokens ready
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">🔄</span>
                  Figma API sync (pending)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-yellow-500">🔄</span>
                  TypeScript integration (pending)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="card-onio">
          <h2 className="text-onio-heading text-2xl mb-6">Next Steps</h2>
          <div className="text-onio-body space-y-4">
            <p>
              This demo shows that our modern Tailwind components work perfectly alongside 
              the existing styled-components infrastructure. Both approaches coexist safely.
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Enable TypeScript for better development experience</li>
              <li>Set up Figma Variables API for automatic design token sync</li>
              <li>Create more modern components (Card, Input, Modal)</li>
              <li>Implement component migration strategy</li>
              <li>Add comprehensive testing for all components</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}

// This page is accessible at http://localhost:3001/modern-demo