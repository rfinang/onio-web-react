import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Onio Design System Overview
 * Single source of truth for Figma → Code workflow
 * Maps Figma variables to Tailwind classes
 */
export default function DesignSystem() {
  const [copiedText, setCopiedText] = useState('');
  
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const ColorSwatch = ({ name, figmaVar, cssVar, hex, tailwindClass, isDark }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div 
        className="h-24 w-full" 
        style={{ backgroundColor: hex }}
      />
      <div className="p-4">
        <h4 className="font-bold text-lg mb-2">{name}</h4>
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Figma:</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">{figmaVar}</code>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">CSS:</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">{cssVar}</code>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Hex:</span>
            <code className="text-xs bg-gray-100 px-2 py-1 rounded">{hex}</code>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Class:</span>
            <button 
              onClick={() => copyToClipboard(tailwindClass)}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition"
            >
              {tailwindClass}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const SpacingExample = ({ name, value, tailwindClass, pixels }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded border">
      <div className="w-20 text-sm font-medium">{name}</div>
      <div 
        className="bg-secondary" 
        style={{ width: pixels, height: '24px' }}
      />
      <div className="flex-1 text-sm text-gray-600">
        <code className="bg-gray-100 px-2 py-1 rounded">{tailwindClass}</code>
        <span className="ml-2">{value}</span>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Design System - Onio × Figma</title>
        <meta name="description" content="Onio Design System - Figma to Code Reference" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-primary text-white">
          <div className="container py-16">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-4">
                Onio Design System
              </h1>
              <p className="text-xl opacity-90 mb-6">
                Figma → Code Reference Guide
              </p>
              <div className="flex gap-4 text-sm">
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded">
                  Figma Variables Ready
                </div>
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded">
                  Tailwind Configured
                </div>
                <div className="bg-white/20 backdrop-blur px-4 py-2 rounded">
                  Bootstrap Grid Compatible
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Quick Navigation */}
        <nav className="bg-white border-b sticky top-0 z-10">
          <div className="container">
            <div className="flex gap-8 py-4 overflow-x-auto">
              <a href="#breakpoints" className="text-sm font-medium hover:text-primary whitespace-nowrap">Breakpoints</a>
              <a href="#colors" className="text-sm font-medium hover:text-primary whitespace-nowrap">Colors</a>
              <a href="#typography" className="text-sm font-medium hover:text-primary whitespace-nowrap">Typography</a>
              <a href="#spacing" className="text-sm font-medium hover:text-primary whitespace-nowrap">Spacing</a>
              <a href="#components" className="text-sm font-medium hover:text-primary whitespace-nowrap">Components</a>
              <a href="#grid" className="text-sm font-medium hover:text-primary whitespace-nowrap">Grid System</a>
              <a href="#usage" className="text-sm font-medium hover:text-primary whitespace-nowrap">Usage Guide</a>
            </div>
          </div>
        </nav>

        {/* Copy Notification */}
        {copiedText && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
            Copied: {copiedText}
          </div>
        )}

        <div className="container py-12">
          {/* Colors Section */}
          <section id="colors" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Color System</h2>
            <p className="text-gray-600 mb-8">
              Figma color variables mapped to Tailwind utilities. Click any class to copy.
            </p>
            
            <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              <ColorSwatch 
                name="Primary (Black)"
                figmaVar="$color-primary"
                cssVar="--onio-primary"
                hex="#222021"
                tailwindClass="text-primary"
              />
              <ColorSwatch 
                name="Secondary (Yellow)"
                figmaVar="$color-secondary"
                cssVar="--onio-secondary"
                hex="#D2FE24"
                tailwindClass="text-secondary"
              />
              <ColorSwatch 
                name="Accent (Orange)"
                figmaVar="$color-accent"
                cssVar="--onio-accent"
                hex="#FF6231"
                tailwindClass="text-accent"
              />
              <ColorSwatch 
                name="Muted (Grey)"
                figmaVar="$color-muted"
                cssVar="--onio-muted"
                hex="#AEADAD"
                tailwindClass="text-muted"
              />
            </div>

            <h3 className="text-lg font-semibold mb-4">Background Colors</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              <ColorSwatch 
                name="Background"
                figmaVar="$color-background"
                cssVar="--onio-background"
                hex="#F5F5F5"
                tailwindClass="bg-background"
              />
              <ColorSwatch 
                name="White"
                figmaVar="$color-white"
                cssVar="--onio-white"
                hex="#FFFFFF"
                tailwindClass="bg-white"
              />
              <ColorSwatch 
                name="Alert/Danger"
                figmaVar="$color-alert"
                cssVar="--onio-danger"
                hex="#EE4A26"
                tailwindClass="text-danger"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Figma Integration</h4>
              <p className="text-sm text-blue-800">
                These color tokens can be synced directly from Figma using the Variables API.
                Variable names match exactly between Figma and code.
              </p>
            </div>
          </section>

          {/* Breakpoints Section */}
          <section id="breakpoints" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Breakpoints & Responsive Design</h2>
            <p className="text-gray-600 mb-8">
              Screen sizes and responsive behavior matching your Figma designs.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg border overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h3 className="font-semibold">Breakpoint Definitions</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Mobile</div>
                      <div className="text-sm text-gray-500">Default, phones</div>
                    </div>
                    <div className="text-right">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">320px - 767px</code>
                      <div className="text-xs text-gray-500 mt-1">sm: prefix</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Tablet</div>
                      <div className="text-sm text-gray-500">iPads, tablets</div>
                    </div>
                    <div className="text-right">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">768px - 1199px</code>
                      <div className="text-xs text-gray-500 mt-1">md: prefix</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Desktop</div>
                      <div className="text-sm text-gray-500">Laptops, desktops</div>
                    </div>
                    <div className="text-right">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">1200px - 1607px</code>
                      <div className="text-xs text-gray-500 mt-1">lg: prefix</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Wide</div>
                      <div className="text-sm text-gray-500">Large monitors</div>
                    </div>
                    <div className="text-right">
                      <code className="text-sm bg-gray-100 px-2 py-1 rounded">1608px+</code>
                      <div className="text-xs text-gray-500 mt-1">xl: prefix</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b">
                  <h3 className="font-semibold">Container Margins</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Mobile</div>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">320-767px</code>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">27px</div>
                      <div className="text-xs text-gray-500">each side</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Tablet</div>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">768-1199px</code>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">59px</div>
                      <div className="text-xs text-gray-500">each side</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">Desktop</div>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">1200px+</code>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">88px</div>
                      <div className="text-xs text-gray-500">each side</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-gray-600">
                      <strong>Max Content Width:</strong> 1416px
                      <div className="text-xs text-gray-500 mt-1">1608px - (2 × 96px columns)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
              <h4 className="font-semibold text-blue-900 mb-2">📱 Current Viewport</h4>
              <p className="text-sm text-blue-800">
                Resize your browser to see how content adapts at different breakpoints.
                The design system automatically adjusts typography, spacing, and layout.
              </p>
            </div>
          </section>

          {/* Typography Section */}
          <section id="typography" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Responsive Typography</h2>
            <p className="text-gray-600 mb-8">
              Font sizes scale across breakpoints for optimal readability.
            </p>

            {/* Responsive Typography Table */}
            <div className="bg-white rounded-lg border overflow-x-auto mb-8">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">Type Style</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">Mobile<br/><span className="font-normal">320-767px</span></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">Tablet<br/><span className="font-normal">768-1199px</span></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase whitespace-nowrap">Desktop<br/><span className="font-normal">1200px+</span></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tailwind Classes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-6 py-4 font-medium">Display/H1</td>
                    <td className="px-6 py-4">
                      <div className="text-2xl font-bold">32px</div>
                      <div className="text-xs text-gray-500">2rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-2xl font-bold">40px</div>
                      <div className="text-xs text-gray-500">2.5rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-2xl font-bold">48px</div>
                      <div className="text-xs text-gray-500">3rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-3xl md:text-4xl lg:text-5xl</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Heading/H2</td>
                    <td className="px-6 py-4">
                      <div className="text-xl font-bold">24px</div>
                      <div className="text-xs text-gray-500">1.5rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xl font-bold">32px</div>
                      <div className="text-xs text-gray-500">2rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-xl font-bold">36px</div>
                      <div className="text-xs text-gray-500">2.25rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-2xl md:text-3xl lg:text-4xl</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Heading/H3</td>
                    <td className="px-6 py-4">
                      <div className="text-lg font-bold">20px</div>
                      <div className="text-xs text-gray-500">1.25rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-lg font-bold">24px</div>
                      <div className="text-xs text-gray-500">1.5rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-lg font-bold">30px</div>
                      <div className="text-xs text-gray-500">1.875rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-xl md:text-2xl lg:text-3xl</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Heading/H4</td>
                    <td className="px-6 py-4">
                      <div className="font-bold">18px</div>
                      <div className="text-xs text-gray-500">1.125rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">20px</div>
                      <div className="text-xs text-gray-500">1.25rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">24px</div>
                      <div className="text-xs text-gray-500">1.5rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-lg md:text-xl lg:text-2xl</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Body/Large</td>
                    <td className="px-6 py-4">
                      <div className="font-bold">16px</div>
                      <div className="text-xs text-gray-500">1rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">18px</div>
                      <div className="text-xs text-gray-500">1.125rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">18px</div>
                      <div className="text-xs text-gray-500">1.125rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-base md:text-lg</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Body/Regular</td>
                    <td className="px-6 py-4">
                      <div className="font-bold">14px</div>
                      <div className="text-xs text-gray-500">0.875rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">16px</div>
                      <div className="text-xs text-gray-500">1rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">16px</div>
                      <div className="text-xs text-gray-500">1rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-sm md:text-base</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">Body/Small</td>
                    <td className="px-6 py-4">
                      <div className="font-bold">12px</div>
                      <div className="text-xs text-gray-500">0.75rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">14px</div>
                      <div className="text-xs text-gray-500">0.875rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-bold">14px</div>
                      <div className="text-xs text-gray-500">0.875rem</div>
                    </td>
                    <td className="px-6 py-4">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">text-xs md:text-sm</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Usage Examples */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-4">Responsive Heading Example</h4>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`<h1 className="text-3xl md:text-4xl lg:text-5xl 
               font-bold text-primary">
  Responsive Heading
</h1>`}
                </pre>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Mobile:</strong> 32px</p>
                  <p><strong>Tablet:</strong> 40px</p>
                  <p><strong>Desktop:</strong> 48px</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-4">Responsive Body Text Example</h4>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`<p className="text-sm md:text-base 
             leading-relaxed text-muted">
  Body text that scales appropriately
</p>`}
                </pre>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>Mobile:</strong> 14px</p>
                  <p><strong>Tablet+:</strong> 16px</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-4">Font Weights</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-normal">Normal (400)</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">font-normal</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Medium (500)</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">font-medium</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Semibold (600)</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">font-semibold</code>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Bold (700)</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">font-bold</code>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h4 className="font-semibold mb-4">Line Heights</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tight</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">leading-tight</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Normal</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">leading-normal</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Relaxed</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">leading-relaxed</code>
                  </div>
                  <div className="flex justify-between">
                    <span>Loose</span>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">leading-loose</code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Spacing Section */}
          <section id="spacing" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Spacing System</h2>
            <p className="text-gray-600 mb-8">
              Based on Figma's 8px grid system. Matches your 96px column and 24px gutter.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Spacing Scale</h3>
                <div className="space-y-2">
                  <SpacingExample name="0" value="0px" tailwindClass="p-0" pixels="0px" />
                  <SpacingExample name="1" value="4px" tailwindClass="p-1" pixels="4px" />
                  <SpacingExample name="2" value="8px" tailwindClass="p-2" pixels="8px" />
                  <SpacingExample name="3" value="12px" tailwindClass="p-3" pixels="12px" />
                  <SpacingExample name="4" value="16px" tailwindClass="p-4" pixels="16px" />
                  <SpacingExample name="6" value="24px (gutter)" tailwindClass="p-6" pixels="24px" />
                  <SpacingExample name="8" value="32px" tailwindClass="p-8" pixels="32px" />
                  <SpacingExample name="12" value="48px" tailwindClass="p-12" pixels="48px" />
                  <SpacingExample name="16" value="64px" tailwindClass="p-16" pixels="64px" />
                  <SpacingExample name="24" value="96px (column)" tailwindClass="p-24" pixels="96px" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Figma Grid Mapping</h3>
                <div className="bg-white rounded-lg border p-6 space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Column Width</div>
                    <div className="text-2xl font-bold">96px</div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">w-24</code>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Gutter Width</div>
                    <div className="text-2xl font-bold">24px</div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">gap-6</code>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Desktop Margin</div>
                    <div className="text-2xl font-bold">88px</div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">px-22</code>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Content Width</div>
                    <div className="text-2xl font-bold">1416px</div>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">max-w-[1416px]</code>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Components Section */}
          <section id="components" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Component Library</h2>
            <p className="text-gray-600 mb-8">
              Ready-to-use components that match Figma designs.
            </p>

            {/* Buttons */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Buttons</h3>
              
              <div className="bg-white rounded-lg border p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Variants</h4>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="accent">Accent</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="danger">Danger</Button>
                </div>

                <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Sizes</h4>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>

                <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">States</h4>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button loading>Loading</Button>
                </div>

                <div className="bg-gray-50 rounded p-4">
                  <h5 className="font-medium mb-2">Usage</h5>
                  <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`import { Button } from '../components/ui';

<Button variant="primary" size="lg">
  Call to Action
</Button>`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Cards</h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <h4 className="font-semibold mb-2">Simple Card</h4>
                  <p className="text-sm text-gray-600">
                    Basic card with padding and shadow.
                  </p>
                </Card>

                <Card shadow="lg" bordered>
                  <h4 className="font-semibold mb-2">Enhanced Card</h4>
                  <p className="text-sm text-gray-600">
                    Card with border and larger shadow.
                  </p>
                </Card>

                <Card 
                  header={<h4 className="font-semibold">With Header</h4>}
                  footer={<Button size="sm">Action</Button>}
                >
                  <p className="text-sm text-gray-600">
                    Card with header and footer sections.
                  </p>
                </Card>
              </div>

              <div className="bg-gray-50 rounded p-4">
                <h5 className="font-medium mb-2">Usage</h5>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`import { Card } from '../components/ui';

<Card shadow="lg" bordered>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>`}
                </pre>
              </div>
            </div>

            {/* Form Elements - Coming Soon */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-amber-900">Form Components</h3>
              <p className="text-amber-800 mb-4">
                Coming soon: Input, Select, Checkbox, Radio, and more form components.
              </p>
              <div className="text-sm text-amber-700">
                <p className="font-medium mb-2">Planned Components:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Text Input with validation states</li>
                  <li>Select dropdown with custom styling</li>
                  <li>Checkbox and Radio buttons</li>
                  <li>Form layouts and field groups</li>
                  <li>File upload component</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Grid System */}
          <section id="grid" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Grid System</h2>
            <p className="text-gray-600 mb-8">
              Currently using Bootstrap grid. Tailwind classes work alongside for styling.
            </p>

            <div className="bg-white rounded-lg border p-8">
              <h3 className="text-lg font-semibold mb-4">Hybrid Approach</h3>
              
              <div className="mb-6">
                <h4 className="font-medium mb-2">Layout (Bootstrap)</h4>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`<div className="container">
  <div className="row">
    <div className="col-md-6">
      <!-- Content -->
    </div>
  </div>
</div>`}
                </pre>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-2">Styling (Tailwind)</h4>
                <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`<div className="container">
  <div className="row">
    <div className="col-md-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Tailwind Styled Content
        </h2>
      </div>
    </div>
  </div>
</div>`}
                </pre>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Bootstrap handles responsive grid layout while Tailwind 
                  handles visual styling. This hybrid approach allows gradual migration without 
                  breaking existing layouts.
                </p>
              </div>
            </div>
          </section>

          {/* Usage Guide */}
          <section id="usage" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Usage Guide</h2>
            <p className="text-gray-600 mb-8">
              Best practices for using the design system.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4 text-green-700">✅ Do's</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Use Tailwind for colors, typography, spacing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Use component library (Button, Card, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Keep Bootstrap for grid layout
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Match Figma variable names
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Write new components with Tailwind
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold mb-4 text-red-700">❌ Don'ts</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Don't migrate Bootstrap grid to Tailwind
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Don't use inline styles for colors
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Don't create new styled-components
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Don't use arbitrary values when tokens exist
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    Don't mix old button classes with new
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-primary to-accent text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Migration Strategy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">1</div>
                  <h4 className="font-semibold mb-2">Visual Elements</h4>
                  <p className="text-sm opacity-90">
                    Colors, typography, spacing, shadows - anything designers control
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2</div>
                  <h4 className="font-semibold mb-2">Components</h4>
                  <p className="text-sm opacity-90">
                    Buttons, cards, forms - reusable UI elements
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3</div>
                  <h4 className="font-semibold mb-2">Keep Bootstrap Grid</h4>
                  <p className="text-sm opacity-90">
                    Don't migrate layout system - not worth the effort
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}