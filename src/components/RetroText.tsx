import React from 'react';

interface RetroTextProps {
  children: React.ReactNode;
  className?: string;
}

export function RetroText({ children, className = '' }: RetroTextProps) {
  return (
    <div className={`transition-all duration-300 hover:scale-[1.02] ${className}`}>
      {children}
    </div>
  );
}