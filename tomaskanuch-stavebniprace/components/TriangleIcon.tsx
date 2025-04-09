// components/TriangleIcon.tsx
import React from 'react';

interface TriangleIconProps {
  color?: string;
  size?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function TriangleIcon({ 
  color = '#1AC8ED', 
  size = 20, 
  direction = 'up' 
}: TriangleIconProps) {
  
  const getStyle = () => {
    const style: React.CSSProperties = {
      width: 0,
      height: 0,
      display: 'inline-block',
    };
    
    if (direction === 'up') {
      style.borderLeft = `${size/2}px solid transparent`;
      style.borderRight = `${size/2}px solid transparent`;
      style.borderBottom = `${size}px solid ${color}`;
    } else if (direction === 'down') {
      style.borderLeft = `${size/2}px solid transparent`;
      style.borderRight = `${size/2}px solid transparent`;
      style.borderTop = `${size}px solid ${color}`;
    } else if (direction === 'left') {
      style.borderTop = `${size/2}px solid transparent`;
      style.borderBottom = `${size/2}px solid transparent`;
      style.borderRight = `${size}px solid ${color}`;
    } else if (direction === 'right') {
      style.borderTop = `${size/2}px solid transparent`;
      style.borderBottom = `${size/2}px solid transparent`;
      style.borderLeft = `${size}px solid ${color}`;
    }
    
    return style;
  };
  
  return <div style={getStyle()} />;
}