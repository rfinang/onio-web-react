import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '../../components/modern/Button'

describe('Modern Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-onio-primary') // Default primary variant
  })

  it('renders different variants correctly', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-onio-secondary')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border-onio-primary')

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button')).toHaveClass('text-onio-dark')
  })

  it('renders different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-3', 'py-2', 'text-sm')

    rerender(<Button size="medium">Medium</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-base')

    rerender(<Button size="large">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4', 'text-lg')
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
    expect(button).toHaveClass('focus:outline-none', 'focus:ring-2')
  })
})