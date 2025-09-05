import Head from 'next/head'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

export default function FigmaTest() {
  return (
    <>
      <Head>
        <title>Figma MCP Test - Onio</title>
        <meta name="description" content="Testing Figma design tokens integration" />
      </Head>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <Typography variant="hero" className="text-center mb-8">
              Figma MCP Integration Test
            </Typography>
            
            <Typography variant="body-lg" className="text-center max-w-2xl mx-auto">
              Testing real-time design tokens from Figma through MCP server
            </Typography>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Typography variant="h1" className="text-primary mb-6">
              Typography Scale Test
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Typography variant="h2" className="text-accent mb-4">
                  Heading Levels
                </Typography>
                
                <div className="space-y-4">
                  <Typography variant="h3" className="text-primary">
                    H3: Design System Integration
                  </Typography>
                  
                  <Typography variant="h4" className="text-secondary">
                    H4: Component Architecture
                  </Typography>
                  
                  <Typography variant="h5" className="text-muted">
                    H5: Token Management
                  </Typography>
                  
                  <Typography variant="h6" className="text-primary">
                    H6: Real-time Updates
                  </Typography>
                </div>
              </div>

              <div>
                <Typography variant="h2" className="text-accent mb-4">
                  Body Text Variants
                </Typography>
                
                <div className="space-y-4">
                  <Typography variant="body-lg" className="text-primary">
                    Large body text for emphasis and readability
                  </Typography>
                  
                  <Typography variant="body" className="text-primary">
                    Regular body text for standard content and paragraphs
                  </Typography>
                  
                  <Typography variant="body-sm" className="text-muted">
                    Small body text for captions and secondary information
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Showcase */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Typography variant="h1" className="text-primary mb-8 text-center">
              Color System Test
            </Typography>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Primary Color */}
              <Card className="p-6 text-center">
                <div className="w-full h-24 bg-primary rounded-lg mb-4"></div>
                <Typography variant="h6" className="text-primary mb-2">
                  Primary
                </Typography>
                <Typography variant="body-sm" className="text-muted">
                  Main brand color
                </Typography>
              </Card>

              {/* Secondary Color */}
              <Card className="p-6 text-center">
                <div className="w-full h-24 bg-secondary rounded-lg mb-4"></div>
                <Typography variant="h6" className="text-primary mb-2">
                  Secondary
                </Typography>
                <Typography variant="body-sm" className="text-muted">
                  Brand accent
                </Typography>
              </Card>

              {/* Accent Color */}
              <Card className="p-6 text-center">
                <div className="w-full h-24 bg-accent rounded-lg mb-4"></div>
                <Typography variant="h6" className="text-primary mb-2">
                  Accent
                </Typography>
                <Typography variant="body-sm" className="text-muted">
                  Secondary accent
                </Typography>
              </Card>

              {/* Alert Color */}
              <Card className="p-6 text-center">
                <div className="w-full h-24 bg-alert rounded-lg mb-4"></div>
                <Typography variant="h6" className="text-primary mb-2">
                  Alert
                </Typography>
                <Typography variant="body-sm" className="text-muted">
                  Error/warning color
                </Typography>
              </Card>
            </div>
          </div>
        </section>

        {/* Spacing System Test */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Typography variant="h1" className="text-primary mb-8 text-center">
              Spacing System Test
            </Typography>
            
            <div className="space-y-6">
              <div className="bg-muted p-xs rounded">
                <Typography variant="body" className="text-white">XS Spacing (4px)</Typography>
              </div>
              
              <div className="bg-muted p-sm rounded">
                <Typography variant="body" className="text-white">SM Spacing (8px)</Typography>
              </div>
              
              <div className="bg-muted p-md rounded">
                <Typography variant="body" className="text-white">MD Spacing (16px)</Typography>
              </div>
              
              <div className="bg-muted p-lg rounded">
                <Typography variant="body" className="text-white">LG Spacing (24px)</Typography>
              </div>
              
              <div className="bg-muted p-xl rounded">
                <Typography variant="body" className="text-white">XL Spacing (32px)</Typography>
              </div>
              
              <div className="bg-muted p-2xl rounded">
                <Typography variant="body" className="text-white">2XL Spacing (48px)</Typography>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Components */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Typography variant="h1" className="text-primary mb-8 text-center">
              Component Integration Test
            </Typography>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
            </div>
            
            <div className="max-w-md mx-auto">
              <Card className="p-6">
                <Typography variant="h4" className="text-primary mb-4">
                  MCP Status
                </Typography>
                
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                    <Typography variant="body" className="text-primary">
                      Server Connected
                    </Typography>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                    <Typography variant="body" className="text-primary">
                      Design Tokens Synced
                    </Typography>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                    <Typography variant="body" className="text-primary">
                      Real-time Updates Active
                    </Typography>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}