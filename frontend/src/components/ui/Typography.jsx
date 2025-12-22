import React from 'react';

// Heading 1 - Page title
export const Heading1 = ({ children, className = '' }) => (
  <h1 className={`heading-1 mb-6 ${className}`}>
    {children}
  </h1>
);

// Heading 2 - Section title
export const Heading2 = ({ children, className = '' }) => (
  <h2 className={`heading-2 mb-4 mt-8 ${className}`}>
    {children}
  </h2>
);

// Heading 3 - Subsection title
export const Heading3 = ({ children, className = '' }) => (
  <h3 className={`heading-3 mb-3 mt-6 ${className}`}>
    {children}
  </h3>
);

// Paragraph - Body text
export const Paragraph = ({ children, className = '' }) => (
  <p 
    className={`body-text mb-4 ${className}`}
    dangerouslySetInnerHTML={typeof children === 'string' ? { __html: children } : undefined}
  >
    {typeof children !== 'string' ? children : undefined}
  </p>
);

// Math block for formulas
export const MathBlock = ({ children, className = '' }) => (
  <div className={`math-block ${className}`}>
    <span className="text-lg font-mono text-foreground">{children}</span>
  </div>
);

// Highlighted text box
export const HighlightBox = ({ children, variant = 'info', className = '' }) => {
  const variants = {
    info: 'bg-primary/5 border-primary/20 text-foreground',
    success: 'bg-success/5 border-success/20 text-foreground',
    warning: 'bg-warning/5 border-warning/20 text-foreground',
    formula: 'bg-accent/5 border-accent/20 text-foreground',
  };

  return (
    <div className={`p-4 sm:p-6 rounded-xl border ${variants[variant]} my-6 ${className}`}>
      {children}
    </div>
  );
};

// List item
export const ListItem = ({ children, className = '' }) => (
  <li className={`body-text mb-2 ${className}`}>
    {children}
  </li>
);

// Ordered list
export const OrderedList = ({ children, className = '' }) => (
  <ol className={`list-decimal list-inside space-y-2 my-4 ${className}`}>
    {children}
  </ol>
);

// Unordered list
export const UnorderedList = ({ children, className = '' }) => (
  <ul className={`list-disc list-inside space-y-2 my-4 ${className}`}>
    {children}
  </ul>
);
