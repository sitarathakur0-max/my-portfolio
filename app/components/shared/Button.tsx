// components/shared/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 hover:shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
    secondary: "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white",
    outline: "border-2 border-blue-600 text-blue-600  hover:bg-blue-600 hover:text-white"
  };

  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;