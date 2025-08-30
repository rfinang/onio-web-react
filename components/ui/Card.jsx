import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card Component - Pure Tailwind implementation
 * Flexible card component with header, body, and footer sections
 */
const Card = ({
  children,
  className = '',
  header,
  footer,
  bordered = false,
  shadow = 'sm',
  padding = true,
  hoverable = false,
  onClick,
}) => {
  // Shadow variants
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    soft: 'shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]',
  };

  // Base classes
  const baseClasses = `
    bg-white rounded-lg overflow-hidden
    ${shadowClasses[shadow]}
    ${bordered ? 'border border-gray-200' : ''}
    ${hoverable ? 'hover:shadow-lg transition-shadow duration-200 cursor-pointer' : ''}
    ${onClick ? 'cursor-pointer' : ''}
  `.trim();

  const combinedClasses = [baseClasses, className].filter(Boolean).join(' ');

  const cardContent = (
    <>
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          {header}
        </div>
      )}
      
      <div className={padding ? 'p-6' : ''}>
        {children}
      </div>
      
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </>
  );

  if (onClick) {
    return (
      <div
        className={combinedClasses}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick(e);
          }
        }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <div className={combinedClasses}>
      {cardContent}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  bordered: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', 'soft']),
  padding: PropTypes.bool,
  hoverable: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;