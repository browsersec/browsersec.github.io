import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
  return (
    <div className={`bg-slate-900/50 border border-slate-800 rounded-xl p-6 backdrop-blur-sm ${className}`}>
      {title && <h3 className="text-lg font-semibold text-slate-200 mb-4">{title}</h3>}
      {children}
    </div>
  );
};
