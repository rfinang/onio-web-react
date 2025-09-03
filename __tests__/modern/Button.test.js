import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../../components/ui/Button'

describe('Modern Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary') // Default primary variant maps to design token
  })

  it('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    // secondary maps to muted background
    expect(screen.getByRole('button')).toHaveClass('bg-muted')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border-2', 'border-primary')

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button')).toHaveClass('text-primary')
  })

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    // small uses compact padding and text-sm
    expect(screen.getByRole('button')).toHaveClass('px-4', 'py-2', 'text-sm')

    rerender(<Button size="md">Default MD</Button>)
    // md has configured min height and responsive paddings
    expect(screen.getByRole('button').className).toMatch(/min-h-\[4\.4rem\]/)

    rerender(<Button size="large">Large</Button>)
    // large increases gap and keeps configured min height
    expect(screen.getByRole('button')).toHaveClass('gap-3')
    expect(screen.getByRole('button').className).toMatch(/min-h-\[4\.4rem\]/)
  })

  it('handles disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('accepts custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    render(<Button data-testid="custom-button" title="Custom Title">Test</Button>)
    const button = screen.getByTestId('custom-button')
    expect(button).toHaveAttribute('title', 'Custom Title')
  })

  it('has proper accessibility attributes', () => {
    render(<Button>Accessible Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('focus:outline-none')
  })
})
