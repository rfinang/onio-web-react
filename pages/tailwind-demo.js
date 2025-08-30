import React from 'react';
import Head from 'next/head';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

/**
 * Tailwind Component Demo Page
 * Showcases the new Tailwind-based component system
 */
export default function TailwindDemo() {
  return (
    <>
      <Head>
        <title>Tailwind Component System - Onio</title>
        <meta name="description" content="Demo of Tailwind-based components" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-primary text-white py-16">
          <div className="container">
            <h1 className="heading-1 text-white mb-6">
              Tailwind Component System
            </h1>
            <p className="text-xl leading-relaxed max-w-3xl">
              A comprehensive design system built with Tailwind CSS, featuring
              consistent styling, semantic colors, and reusable components.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container section">
          {/* Colors Section */}
          <section className="mb-16">
            <h2 className="heading-3 mb-8">Brand Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary rounded-lg mx-auto mb-4 shadow-md"></div>
                <p className="font-medium">Primary</p>
                <p className="text-sm text-muted">#222021</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-secondary rounded-lg mx-auto mb-4 shadow-md"></div>
                <p className="font-medium">Secondary</p>
                <p className="text-sm text-muted">#D2FE24</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-accent rounded-lg mx-auto mb-4 shadow-md"></div>
                <p className="font-medium">Accent</p>
                <p className="text-sm text-muted">#FF6231</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-muted rounded-lg mx-auto mb-4 shadow-md"></div>
                <p className="font-medium">Muted</p>
                <p className="text-sm text-muted">#AEADAD</p>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="mb-16">
            <h2 className="heading-3 mb-8">Typography</h2>
            <div className="space-y-6">
              <div>
                <h1 className="heading-1">Heading 1 - Display</h1>
                <code className="text-sm text-muted">heading-1</code>
              </div>
              <div>
                <h2 className="heading-2">Heading 2 - Section Title</h2>
                <code className="text-sm text-muted">heading-2</code>
              </div>
              <div>
                <h3 className="heading-3">Heading 3 - Subsection</h3>
                <code className="text-sm text-muted">heading-3</code>
              </div>
              <div>
                <h4 className="heading-4">Heading 4 - Component Title</h4>
                <code className="text-sm text-muted">heading-4</code>
              </div>
              <div>
                <p className="text-body">
                  Body text - This is the standard text used throughout the application.
                  It provides excellent readability with proper line height and spacing.
                </p>
                <code className="text-sm text-muted">text-body</code>
              </div>
              <div>
                <p className="text-small">
                  Small text - Used for captions, labels, and secondary information.
                </p>
                <code className="text-sm text-muted">text-small</code>
              </div>
            </div>
          </section>

          {/* Button Section */}
          <section className="mb-16">
            <h2 className="heading-3 mb-8">Button Components</h2>
            
            {/* Button Variants */}
            <div className="mb-8">
              <h4 className="heading-5 mb-4">Button Variants</h4>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div className="mb-8">
              <h4 className="heading-5 mb-4">Button Sizes</h4>
              <div className="flex flex-wrap items-end gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            {/* Button States */}
            <div className="mb-8">
              <h4 className="heading-5 mb-4">Button States</h4>
              <div className="flex flex-wrap gap-4">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button loading>Loading</Button>
                <Button 
                  leftIcon={
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  }
                >
                  With Icon
                </Button>
              </div>
            </div>
          </section>

          {/* Card Section */}
          <section className="mb-16">
            <h2 className="heading-3 mb-8">Card Components</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <h4 className="heading-5 mb-3">Simple Card</h4>
                <p className="text-body">
                  This is a basic card with default styling. Perfect for content blocks
                  and information displays.
                </p>
              </Card>

              <Card
                header={<h4 className="heading-5">Card with Header</h4>}
                footer={
                  <div className="flex justify-end">
                    <Button size="sm">Action</Button>
                  </div>
                }
              >
                <p className="text-body">
                  This card includes a header and footer section for more complex layouts.
                </p>
              </Card>

              <Card shadow="lg" bordered hoverable>
                <h4 className="heading-5 mb-3">Enhanced Card</h4>
                <p className="text-body">
                  This card has enhanced styling with larger shadow, border, and hover effects.
                </p>
              </Card>
            </div>
          </section>

          {/* Utility Classes Section */}
          <section className="mb-16">
            <h2 className="heading-3 mb-8">Utility Classes</h2>
            
            {/* Spacing */}
            <div className="mb-8">
              <h4 className="heading-5 mb-4">Spacing Utilities</h4>
              <Card>
                <div className="space-y-4">
                  <div className="section-sm bg-background rounded">Section Small</div>
                  <div className="section bg-background rounded">Section Normal</div>
                  <div className="section-lg bg-background rounded">Section Large</div>
                </div>
              </Card>
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h4 className="heading-5 mb-4">Badges & Pills</h4>
              <div className="flex flex-wrap gap-3">
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-danger">Danger</span>
                <span className="badge badge-warning">Warning</span>
                <span className="badge badge-info">Info</span>
                <span className="pill">Pill Style</span>
              </div>
            </div>

            {/* Alerts */}
            <div className="mb-8">
              <h4 className="heading-5 mb-4">Alert Messages</h4>
              <div className="space-y-4">
                <div className="alert alert-success">
                  <strong>Success!</strong> Your changes have been saved successfully.
                </div>
                <div className="alert alert-danger">
                  <strong>Error!</strong> There was a problem processing your request.
                </div>
                <div className="alert alert-warning">
                  <strong>Warning!</strong> Please review your input before proceeding.
                </div>
                <div className="alert alert-info">
                  <strong>Info:</strong> New features are available in this version.
                </div>
              </div>
            </div>
          </section>

          {/* Migration Progress */}
          <section className="mb-16">
            <h2 className="heading-3 mb-8">Migration Progress Examples</h2>
            
            {/* Before/After Examples */}
            <div className="space-y-8">
              {/* HeroBanner CTA Migration */}
              <Card>
                <h4 className="heading-5 mb-4">✅ HeroBanner CTA Button</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold text-red-600 mb-2">Before (styled-components)</h6>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<a className={\`btn btn--large js-link--btn 
  btn--bg btn--bg--\${text_color}\`}>
  <span className="js-link__text">
    {link_to.label}
  </span>
</a>`}
                    </pre>
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-600 mb-2">After (Tailwind)</h6>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Button 
  variant={text_color === 'white' ? 'primary' : 'secondary'}
  size="lg"
  className="js-link--btn"
>
  {link_to.label}
</Button>`}
                    </pre>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted">
                    <strong>Benefits:</strong> Cleaner JSX, consistent sizing, dynamic color mapping, 
                    better TypeScript support
                  </p>
                </div>
              </Card>

              {/* ContactPopup Migration */}
              <Card>
                <h4 className="heading-5 mb-4">✅ ContactPopup Submit Button</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold text-red-600 mb-2">Before</h6>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<button 
  className="btn btn--large btn--bg 
    btn--bg--white js-link--btn w-100"
  disabled={isLoading}
>
  <span className="js-link__text">Send Inquiry</span>
</button>`}
                    </pre>
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-600 mb-2">After</h6>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Button
  disabled={isLoading}
  type="submit"
  variant="outline"
  size="lg"
  fullWidth={true}
  loading={isLoading}
  className="js-link--btn bg-white text-dark border-white"
>
  Send Inquiry
</Button>`}
                    </pre>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted">
                    <strong>Benefits:</strong> Built-in loading states, fullWidth prop, 
                    maintains all existing functionality
                  </p>
                </div>
              </Card>

              {/* ArticleSearchContent Migration */}
              <Card>
                <h4 className="heading-5 mb-4">✅ ArticleSearchContent Load More Button</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h6 className="font-semibold text-red-600 mb-2">Before</h6>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<button
  className="btn btn--large btn--bg btn--bg--silver 
    js-btn-load js-link--btn w-100"
  onClick={handleLoadmore}
  disabled={isLoading}
>
  <span className="js-link__text">Load More</span>
</button>`}
                    </pre>
                  </div>
                  <div>
                    <h6 className="font-semibold text-green-600 mb-2">After</h6>
                    <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
{`<Button
  variant="secondary"
  size="lg"
  onClick={handleLoadmore}
  disabled={isLoading}
  fullWidth={true}
  className="js-btn-load js-link--btn"
>
  Load More
</Button>`}
                    </pre>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-muted">
                    <strong>Benefits:</strong> Semantic variant naming (secondary instead of silver), 
                    consistent with other buttons, cleaner markup
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* Migration Status */}
          <section className="mb-16">
            <Card className="bg-green-50 border-green-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="heading-5 mb-3 text-green-900">Migration Status</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <p className="font-medium text-green-800 mb-2">✅ Completed Components</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• HeroBanner CTA button</li>
                        <li>• ContactPopup submit button</li>
                        <li>• ArticleSearchContent load more button</li>
                        <li>• Button component system</li>
                        <li>• Card component system</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-800 mb-2">🚀 Next Targets</p>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• Career page buttons</li>
                        <li>• Navigation menu buttons</li>
                        <li>• Form input components</li>
                        <li>• Typography migration</li>
                        <li>• Layout utility cleanup</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-100 p-3 rounded">
                    <p className="text-sm text-green-800">
                      <strong>Progress:</strong> ~25% of button components migrated. 
                      Foundation complete with component library, utilities, and gradual migration strategy established.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}