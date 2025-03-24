
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedContainerProps {
  children: ReactNode;
  animation?: 
    'fade-in' | 
    'slide-up' | 
    'slide-down' | 
    'zoom-in' | 
    'blur-in' | 
    'float' | 
    'pulse';
  delay?: number;
  className?: string;
  duration?: number;
}

const AnimatedContainer = ({ 
  children, 
  animation = 'fade-in', 
  delay = 0, 
  className = '', 
  duration = 500 
}: AnimatedContainerProps) => {
  const animationClasses = `animate-${animation}`;
  const delayStyle = { animationDelay: `${delay}ms`, animationDuration: `${duration}ms` };
  
  return (
    <div
      className={cn(animationClasses, className)}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedContainer;
