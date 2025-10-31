import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  as?: 'button' | 'a';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', type = 'button', as = 'button', href }) => {
  const baseClasses = "px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none inline-flex items-center justify-center gap-2";
  
  const styles = {
    primary: "bg-gradient-to-br from-[#22D3EE] to-[#08D9D6] text-black shadow-lg hover:shadow-xl hover:shadow-[#08D9D6]/40",
    secondary: "border border-white/30 text-white hover:border-[#08D9D6] hover:text-[#08D9D6]",
  };

  if (as === 'a') {
    return (
      <a href={href} onClick={onClick} className={`${baseClasses} ${styles[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseClasses} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;