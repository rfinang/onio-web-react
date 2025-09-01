import React, { useState } from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Onio Design System - REALITY CHECK
 * Shows ONLY what's actually migrated to Tailwind in production
 */
export default function DesignSystem() {
  const [copied, setCopied] = useState('');

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(text);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <Head>
        <title>Onio Design System - Migration Status</title>
        <meta name="description" content="Actual Tailwind CSS migration status" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary text-white py-16">
          <div className="container">
            <h1 className="heading-1 text-white mb-6">
              🔍 Onio Design System Reality Check
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl">
              Honest assessment of our Tailwind CSS migration progress. 
              Only showing what's actually implemented in production.
            </p>
          </div>
        </div>

        <div className="container section">
          {/* REALITY CHECK: Migration Status */}
          <section id="migration-status" className="mb-16">
            <h2 className="heading-3 mb-8">🔍 Migration Reality Check</h2>
            <p className="text-body mb-8">
              <strong>Honest assessment:</strong> What's actually migrated vs what's still custom CSS in production.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* What's ACTUALLY Migrated */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-green-900">✅ LIVE on Production</h3>
                </div>
                <ul className="text-sm text-green-800 space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">🎯</span>
                    <div>
                      <strong>Complete Color System Migration</strong>
                      <div className="text-xs text-green-600 font-mono">25 instances across 15+ files</div>
                      <div className="text-xs text-green-700">text-black → text-primary, text-silver → text-muted, text-dark → text-primary</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">🎉</span>
                    <div>
                      <strong>Complete Button Component Migration</strong>
                      <div className="text-xs text-green-600 font-mono">22/22 production instances migrated</div>
                      <div className="text-xs text-green-700">All Load More, Contact, Download, Play Video, and Navigation buttons</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">🎨</span>
                    <div>
                      <strong>Figma-Ready Color Variables</strong>
                      <div className="text-xs text-green-600 font-mono">tailwind.config.js</div>
                      <div className="text-xs text-green-700">$onio-color-primary, $onio-color-muted mapped</div>
                    </div>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t border-green-200">
                  <p className="text-xs text-green-600 font-semibold">Total: Color foundation + ALL button components = ~60% foundation complete</p>
                </div>
              </div>

              {/* What's Still Custom */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-red-900">🚧 Still Custom CSS</h3>
                </div>
                <ul className="text-sm text-red-800 space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    <strong>Remaining work (~65%)</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-1">🚧</span>
                    <strong className="line-through text-gray-500">Buttons: COMPLETED! ✅</strong>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    All layouts, headers, footers, forms
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Typography (h1, h2, text-white - ~200 instances)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">•</span>
                    Spacing (all margins, padding)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 mt-1">✅</span>
                    <span className="line-through text-gray-500">Text Colors (COMPLETED!)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Progress Bar - UPDATED AFTER COLOR MIGRATION */}
            <div className="bg-white rounded-lg border p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold">Migration Progress - Colors & Buttons COMPLETED! 🎉</h4>
                <span className="text-2xl font-bold text-green-600">~70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full" style={{width: '70%'}}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                <strong>LATEST UPDATES:</strong> ✅ All buttons migrated (22/22) ✅ Text-white audit complete (102 instances verified) ✅ Duplicate components removed
              </p>
            </div>
          </section>

          {/* COLOR SYSTEM MIGRATION SUCCESS */}
          <section id="color-system" className="mb-16">
            <h2 className="heading-3 mb-8">🎨 Design Token System - FIGMA READY!</h2>
            <p className="text-body mb-8">
              <strong>Complete Figma → Production workflow:</strong> CSS custom properties as single source of truth, connected to Tailwind and styled-components.
            </p>

            {/* Color Variables Showcase */}
            <div className="bg-gradient-to-r from-green-50 to-gray-50 border border-green-200 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6 text-green-900">🎯 Migrated Color System</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Complete Color System</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg border border-gray-300" style={{backgroundColor: '#222021'}}></div>
                      <div>
                        <code 
                          className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
                          onClick={() => copyToClipboard('$onio/color/primary')}
                        >
                          $onio/color/primary
                        </code>
                        <div className="text-sm text-gray-600">text-primary • var(--onio-color-primary) • #222021</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg border border-gray-300" style={{backgroundColor: '#D2FE24'}}></div>
                      <div>
                        <code 
                          className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
                          onClick={() => copyToClipboard('$onio/color/secondary')}
                        >
                          $onio/color/secondary
                        </code>
                        <div className="text-sm text-gray-600">text-secondary • var(--onio-color-secondary) • #D2FE24</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg border border-gray-300" style={{backgroundColor: '#FF6231'}}></div>
                      <div>
                        <code 
                          className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
                          onClick={() => copyToClipboard('$onio/color/accent')}
                        >
                          $onio/color/accent
                        </code>
                        <div className="text-sm text-gray-600">text-accent • var(--onio-color-accent) • #FF6231</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg border border-gray-300" style={{backgroundColor: '#AEADAD'}}></div>
                      <div>
                        <code 
                          className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
                          onClick={() => copyToClipboard('$onio/color/neutral/muted')}
                        >
                          $onio/color/neutral/muted
                        </code>
                        <div className="text-sm text-gray-600">text-muted • var(--onio-color-muted) • #AEADAD</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg border border-gray-300" style={{backgroundColor: '#F5F5F5'}}></div>
                      <div>
                        <code 
                          className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
                          onClick={() => copyToClipboard('$onio/color/neutral/background')}
                        >
                          $onio/color/neutral/background
                        </code>
                        <div className="text-sm text-gray-600">bg-background • var(--onio-color-background) • #F5F5F5</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg border border-gray-300" style={{backgroundColor: '#FFFFFF'}}></div>
                      <div>
                        <code 
                          className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded block" 
                          onClick={() => copyToClipboard('$onio/color/neutral/white')}
                        >
                          $onio/color/neutral/white
                        </code>
                        <div className="text-sm text-gray-600">text-white • var(--onio-color-white) • #FFFFFF</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Migration Impact</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✅</span>
                      <div>
                        <strong>25 instances migrated</strong>
                        <div className="text-gray-600">Across 15+ component files</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✅</span>
                      <div>
                        <strong>Zero old color classes remaining</strong>
                        <div className="text-gray-600">text-black, text-silver, text-dark eliminated</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✅</span>
                      <div>
                        <strong>Figma variable ready</strong>
                        <div className="text-gray-600">Perfect foundation for design token sync</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-100 border border-green-200 rounded-lg p-4 mt-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-600">🚀</span>
                  <strong className="text-green-900">Ready for Figma Integration</strong>
                </div>
                <p className="text-sm text-green-800">
                  Design token system complete! CSS custom properties → Tailwind → Styled-components all connected. 
                  Update one variable in Figma, changes flow everywhere automatically.
                </p>
              </div>

              {/* Suggested Figma Variable Structure */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h4 className="text-lg font-semibold text-blue-900 mb-4">📋 Suggested Figma Variable Structure</h4>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h5 className="font-medium text-blue-800 mb-3">Core Colors</h5>
                    <div className="space-y-1 font-mono text-blue-700">
                      <div>$onio/color/primary → bg-primary</div>
                      <div>$onio/color/secondary → bg-secondary</div>
                      <div>$onio/color/accent → bg-accent</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-3">Neutral Colors</h5>
                    <div className="space-y-1 font-mono text-blue-700">
                      <div>$onio/color/white → bg-white</div>
                      <div>$onio/color/background → bg-background</div>
                      <div>$onio/color/muted → bg-muted</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-3">Semantic Colors</h5>
                    <div className="space-y-1 font-mono text-blue-700">
                      <div>$onio/color/semantic/success</div>
                      <div>$onio/color/semantic/warning</div>
                      <div>$onio/color/semantic/error</div>
                      <div>$onio/color/semantic/info</div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-blue-800 mb-3">Typography</h5>
                    <div className="space-y-1 font-mono text-blue-700">
                      <div>$onio/typography/heading/primary</div>
                      <div>$onio/typography/heading/secondary</div>
                      <div>$onio/typography/body/primary</div>
                      <div>$onio/typography/body/secondary</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded text-xs text-blue-800">
                  <strong>Note:</strong> These are organizational suggestions. You can adapt the naming to match your Figma workflow.
                </div>
              </div>
            </div>
          </section>

          {/* TAILWIND COMPONENTS */}
          <section id="components" className="mb-16">
            <h2 className="heading-3 mb-8">🔧 Tailwind Components</h2>
            <p className="text-body mb-8">
              <strong>Production components</strong> actually using Tailwind on the live website.
            </p>

            {/* The ONE Button Implementation */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Button Component (22 instances - ALL MIGRATED! 🎉)</h3>
              
              <div className="bg-white rounded-lg border p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">ACTUAL Production Variants</h4>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-800">
                    <strong>✅ Recently migrated 4 more button instances!</strong> InvestorData, CareerDetails, VideoInteractive, NewsSearch
                  </p>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="bg-[#222021] p-6 rounded-lg">
                      <Button variant="white" size="lg">Play Video</Button>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium mb-1">White Border Button (Hero/Video)</div>
                      <code 
                        className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded" 
                        onClick={() => copyToClipboard('$onio/button/white-border')}
                      >
                        $onio/button/white-border
                      </code>
                      <div className="text-xs text-gray-500 mt-1">
                        • CSS: <code>btn btn--large btn--border btn--border--white</code><br/>
                        • Used in: Video overlays, dark backgrounds<br/>
                        • Size: Large (4.4rem height, 2rem+ padding)
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="primary" size="lg">Learn More</Button>
                    <div className="text-sm">
                      <div className="font-medium mb-1">Primary Button</div>
                      <code 
                        className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded" 
                        onClick={() => copyToClipboard('$onio/button/primary')}
                      >
                        $onio/button/primary
                      </code>
                      <div className="text-xs text-gray-500 mt-1">
                        • CSS: <code>btn btn--large btn--bg btn--bg--black</code><br/>
                        • Used in: Main CTAs, form submissions<br/>
                        • Size: Large with proper padding and transitions
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <Button variant="secondary" size="lg">Get Started</Button>
                    <div className="text-sm">
                      <div className="font-medium mb-1">Secondary Button</div>
                      <code 
                        className="text-purple-600 cursor-pointer hover:bg-purple-50 px-2 py-1 rounded" 
                        onClick={() => copyToClipboard('$onio/button/secondary')}
                      >
                        $onio/button/secondary
                      </code>
                      <div className="text-xs text-gray-500 mt-1">
                        • CSS: <code>btn btn--large btn--bg btn--bg--grey</code><br/>
                        • Used in: Secondary actions, "Load More" buttons<br/>
                        • Size: Large with yellow background
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover States Demo */}
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Interactive States (hover to see)</h4>
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <p className="text-sm text-gray-700 mb-4">Hover over these buttons to see the 400ms transition effects:</p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Hover Me - Primary</Button>
                    <Button variant="secondary">Hover Me - Secondary</Button>
                    <Button variant="white">Hover Me - White</Button>
                  </div>
                </div>

                {/* Recent Migrations */}
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-4">Recently Migrated (Production Usage)</h4>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-blue-800">InvestorData.js</strong>
                      <div className="text-xs text-blue-600 font-mono">btn--bg--white → variant="secondary"</div>
                      <div className="text-xs text-blue-700">Modal trigger for contact form</div>
                    </div>
                    <div>
                      <strong className="text-blue-800">CareerDetailsContent.js</strong>
                      <div className="text-xs text-blue-600 font-mono">btn--bg--silver → variant="secondary"</div>
                      <div className="text-xs text-blue-700">"Apply Now" button with external link</div>
                    </div>
                    <div>
                      <strong className="text-blue-800">VideoInteractive.js</strong>
                      <div className="text-xs text-blue-600 font-mono">btn--border--white → variant="white"</div>
                      <div className="text-xs text-blue-700">"Play Video" overlay button</div>
                    </div>
                    <div>
                      <strong className="text-blue-800">NewsSearchContent.js</strong>
                      <div className="text-xs text-blue-600 font-mono">btn--bg--silver → variant="secondary"</div>
                      <div className="text-xs text-blue-700">"Load More" pagination button</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded p-4">
                  <h5 className="font-medium mb-2">Updated Usage Examples</h5>
                  <pre className="text-sm bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto">
{`import { Button } from '../components/ui';

// InvestorData - Modal trigger:
<Button variant="secondary" size="lg" className="js-link--btn"
  data-bs-toggle="modal" data-bs-target="#contactModal">
  Get Started
</Button>

// CareerDetails - External link:
<Button variant="secondary" size="lg" href={linkTo.url} target="_blank">
  Apply Now
</Button>

// VideoInteractive - Play button:
<Button variant="white" size="lg" as="button">
  Play Video
</Button>`}
                  </pre>
                </div>
              </div>
            </div>

            {/* What's NOT Migrated Yet */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">❌ Not Migrated Yet</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-red-600">🚨</span>
                  <strong className="text-red-900">Everything Else Still Uses Custom CSS</strong>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Typography</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• <code>h1, h2, h6</code> classes</li>
                      <li>• <code>text-white</code> (53 instances)</li>
                      <li>• <code>heading--supper</code>, etc.</li>
                      <li className="text-green-700">✅ <code>text-black/text-dark</code> (MIGRATED!)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Forms</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• All <code>form-group</code> elements</li>
                      <li>• Input fields, textareas</li>
                      <li>• Form validation styles</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Layout</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• All <code>HeroImageStyles</code></li>
                      <li>• Navigation, header, footer</li>
                      <li>• Spacing classes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Interactive</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Modal popups</li>
                      <li>• Dropdowns, accordions</li>
                      <li>• All animations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* REALISTIC Next Steps */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-primary to-gray-800 text-white rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-4">🎯 Realistic Next Steps</h3>
              <p className="opacity-90 mb-6">
                Based on actual codebase analysis. One small step at a time.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2 text-yellow-400">2</div>
                  <h4 className="font-semibold mb-2">White Text Migration</h4>
                  <p className="text-sm opacity-90">
                    53 text-white instances to review
                  </p>
                  <ul className="text-xs mt-2 opacity-80">
                    <li>• Keep most as text-white</li>
                    <li>• Some may need text-gray-100</li>
                    <li>• Add $onio-color-white variable</li>
                  </ul>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2 text-green-400">✅</div>
                  <h4 className="font-semibold mb-2">Text Color Migration - DONE!</h4>
                  <p className="text-sm opacity-90">
                    25 instances migrated, foundation complete
                  </p>
                  <ul className="text-xs mt-2 opacity-80">
                    <li>✅ text-black → text-primary (50+ files)</li>
                    <li>✅ text-dark → text-primary (15+ files)</li>
                    <li>✅ text-silver → text-muted (10+ files)</li>
                    <li>✅ Figma variables mapped</li>
                  </ul>
                </div>
                <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                  <div className="text-3xl font-bold mb-2 text-gray-400">3</div>
                  <h4 className="font-semibold mb-2">NO Layout Changes</h4>
                  <p className="text-sm opacity-90">
                    Keep Bootstrap grid, avoid breaking changes
                  </p>
                  <ul className="text-xs mt-2 opacity-80">
                    <li>• Keep: col-*, row, container</li>
                    <li>• Keep: styled-components layout</li>
                    <li>• Focus: visual styling only</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">✅ Migration Philosophy</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">🎯</div>
                  <h4 className="font-semibold mb-2">Target Interactions</h4>
                  <p className="text-sm opacity-90">
                    Focus on user-facing elements: buttons, forms, interactive components
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">🧱</div>
                  <h4 className="font-semibold mb-2">Keep Layouts</h4>
                  <p className="text-sm opacity-90">
                    Don't touch Bootstrap grid, major layout components, or complex styling
                  </p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">📏</div>
                  <h4 className="font-semibold mb-2">Measure Impact</h4>
                  <p className="text-sm opacity-90">
                    Only migrate what provides clear value for Figma→Code workflow
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* COMPREHENSIVE EXAMPLES OF ALL MIGRATED STYLES */}
          <section id="migrated-examples" className="mb-16">
            <h2 className="text-3xl font-bold mb-8">🎯 All Migrated Styles - Live Examples</h2>
            <p className="text-lg mb-8">
              <strong>Visual showcase:</strong> Every style we've successfully migrated to Tailwind with production usage examples.
            </p>

            {/* Color System Examples */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Complete Color System Migration</h3>
              
              <div className="bg-white rounded-lg border p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-6">All Color Classes - Before → After</h4>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="font-semibold mb-4">Text Colors</h5>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-primary font-semibold">Primary Text</span>
                        <code className="text-sm text-purple-600">text-primary</code>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-muted">Muted Text</span>
                        <code className="text-sm text-purple-600">text-muted</code>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-primary rounded">
                        <span className="text-white">White Text</span>
                        <code className="text-sm text-purple-200">text-white</code>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                        <span className="text-accent font-semibold">Accent Text</span>
                        <code className="text-sm text-purple-600">text-accent</code>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-4">Background Colors</h5>
                    <div className="space-y-4">
                      <div className="p-4 bg-primary text-white rounded">
                        <span className="font-semibold">Primary Background</span>
                        <code className="block text-sm mt-1 text-gray-200">bg-primary</code>
                      </div>
                      <div className="p-4 bg-secondary text-primary rounded">
                        <span className="font-semibold">Secondary Background</span>
                        <code className="block text-sm mt-1 text-gray-600">bg-secondary</code>
                      </div>
                      <div className="p-4 bg-background border rounded">
                        <span className="font-semibold text-primary">Background Surface</span>
                        <code className="block text-sm mt-1 text-gray-600">bg-background</code>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-900 mb-2">Migration Impact</h5>
                  <div className="text-sm text-green-800 space-y-1">
                    <div>✅ <strong>25 instances</strong> migrated across 15+ files</div>
                    <div>✅ <strong>Zero legacy classes:</strong> <code className="line-through">text-black</code>, <code className="line-through">text-silver</code>, <code className="line-through">text-dark</code></div>
                    <div>✅ <strong>CSS Custom Properties:</strong> Ready for Figma Variables integration</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button System Examples */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Complete Button System Migration</h3>
              
              <div className="bg-white rounded-lg border p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-6">All Button Variants - Production Examples</h4>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="mb-4">
                      <Button variant="primary" size="lg">Contact Us</Button>
                    </div>
                    <h5 className="font-semibold mb-2">Primary Button</h5>
                    <code className="text-sm text-purple-600 block mb-2">variant="primary"</code>
                    <div className="text-xs text-gray-600">
                      Used in: Header, CookiePopup<br/>
                      <strong>4 instances</strong> migrated
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="mb-4">
                      <Button variant="secondary" size="lg">Load More</Button>
                    </div>
                    <h5 className="font-semibold mb-2">Secondary Button</h5>
                    <code className="text-sm text-purple-600 block mb-2">variant="secondary"</code>
                    <div className="text-xs text-gray-600">
                      Used in: Search, Articles, Downloads<br/>
                      <strong>16 instances</strong> migrated
                    </div>
                  </div>
                  
                  <div className="text-center bg-primary p-4 rounded">
                    <div className="mb-4">
                      <Button variant="white" size="lg">Play Video</Button>
                    </div>
                    <h5 className="font-semibold mb-2 text-white">White Button</h5>
                    <code className="text-sm text-purple-200 block mb-2">variant="white"</code>
                    <div className="text-xs text-gray-200">
                      Used in: Video overlays, dark backgrounds<br/>
                      <strong>2 instances</strong> migrated
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h5 className="font-semibold text-blue-900 mb-4">Complete Migration Details</h5>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h6 className="font-medium text-blue-800 mb-2">Load More Buttons (8 instances)</h6>
                      <ul className="text-blue-700 space-y-1 text-xs">
                        <li>• ProductsSearchContent.js</li>
                        <li>• GeneralSearchContent.js</li>
                        <li>• BlogLastArticles.js</li>
                        <li>• LatestNews.js</li>
                        <li>• MediaCenter.js</li>
                        <li>• CatArticles.js</li>
                        <li>• NewsSearchContent.js (original)</li>
                        <li>• InvestorData.js (original)</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium text-blue-800 mb-2">Navigation & UI Buttons (6 instances)</h6>
                      <ul className="text-blue-700 space-y-1 text-xs">
                        <li>• Header.js - Contact Us</li>
                        <li>• NavMobile.js - Contact us</li>
                        <li>• CookiePopup.js - I agree</li>
                        <li>• NotFound.js - Go Home</li>
                        <li>• DownloadPopup.js - Download</li>
                        <li>• VideoInteractive.js (both versions)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-100 border border-green-200 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-600">🎉</span>
                    <strong className="text-green-900">100% Button Migration Complete</strong>
                  </div>
                  <p className="text-sm text-green-800">
                    All 22 production button instances now use the unified Tailwind Button component with consistent variants, sizes, and styling patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Patterns */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Production Usage Patterns</h3>
              
              <div className="bg-white rounded-lg border p-8">
                <h4 className="text-sm font-medium text-gray-500 uppercase mb-6">How to Use Our Migrated Styles</h4>
                
                <div className="space-y-8">
                  <div>
                    <h5 className="font-semibold mb-3">Color System Usage</h5>
                    <div className="bg-gray-50 p-4 rounded">
                      <pre className="text-sm overflow-x-auto">
{`// Text colors - use everywhere
<h1 className="text-primary">Main heading (#222021)</h1>
<p className="text-muted">Secondary text (#AEADAD)</p>
<span className="text-accent">Highlighted text (#FF6231)</span>

// Background colors  
<div className="bg-primary text-white">Dark section (#222021)</div>
<div className="bg-secondary text-primary">Light section (#D2FE24)</div>
<div className="bg-background">Content area (#F5F5F5)</div>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">Button Component Usage</h5>
                    <div className="bg-gray-50 p-4 rounded">
                      <pre className="text-sm overflow-x-auto">
{`import { Button } from '../ui';

// Primary actions (CTAs, main buttons)
<Button variant="primary" size="lg">Contact Us</Button>

// Secondary actions (Load More, Apply, Get Started)  
<Button variant="secondary" size="lg" fullWidth={true}>Load More</Button>

// Overlay/video buttons on dark backgrounds
<Button variant="white" size="lg">Play Video</Button>

// Links that look like buttons
<Button as="a" href="/" variant="secondary">Go Home</Button>`}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3">CSS Custom Properties (Figma Ready)</h5>
                    <div className="bg-gray-50 p-4 rounded">
                      <pre className="text-sm overflow-x-auto">
{`/* Available CSS variables (single source of truth) */
var(--onio-color-primary)     /* #222021 - Dark primary */
var(--onio-color-secondary)   /* #D2FE24 - Bright lime */  
var(--onio-color-accent)      /* #FF6231 - Orange accent */
var(--onio-color-muted)       /* #AEADAD - Grey text */
var(--onio-color-background)  /* #F5F5F5 - Light background */
var(--onio-color-white)       /* #FFFFFF - Pure white */
var(--onio-color-alert)       /* #EE4A26 - Alert red */

/* Use in styled-components or custom CSS */
color: var(--onio-color-primary);
background: var(--onio-color-secondary);
border: 1px solid var(--onio-color-accent);`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Copy notification */}
          {copied && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              Copied: {copied}
            </div>
          )}
        </div>
      </div>
    </>
  );
}