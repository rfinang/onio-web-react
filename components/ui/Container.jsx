import React from 'react'

// Container with Onio spacing rules:
// Mobile: 27px each side
// Tablet: 33px each side
// Desktop: 6.67% each side
// Large: 8.33% each side
// XL: 10.42% each side
export default function Container({ className = '', children, as: Component = 'div', ...props }) {
  const classes = [
    'w-full mx-auto',
    // horizontal padding per breakpoint
    'px-[27px] md:px-[33px] lg:px-[6.67%] xl:px-[8.33%] 2xl:px-[10.42%]',
    className,
  ].filter(Boolean).join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

