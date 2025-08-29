import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Simple test to verify our testing setup works
describe('Testing Infrastructure Setup', () => {
  it('should render a simple component', () => {
    const TestComponent = () => <div>Hello Testing Setup</div>
    render(<TestComponent />)
    expect(screen.getByText('Hello Testing Setup')).toBeInTheDocument()
  })

  it('should have access to DOM testing utilities', () => {
    const TestComponent = () => (
      <button className="test-button" data-testid="test-btn">
        Click me
      </button>
    )
    render(<TestComponent />)
    
    const button = screen.getByTestId('test-btn')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('test-button')
  })
})