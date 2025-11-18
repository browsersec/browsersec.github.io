import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white focus:ring-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.3)]",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 focus:ring-slate-500 border border-slate-700",
    danger: "bg-rose-600 hover:bg-rose-500 text-white focus:ring-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.3)]",
    ghost: "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
