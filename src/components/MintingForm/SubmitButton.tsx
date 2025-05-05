import React from 'react';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  children: React.ReactNode;
  isSubmitting: boolean;
  icon?: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  children,
  isSubmitting,
  icon
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`
        w-full flex items-center justify-center py-3 px-4 
        border border-transparent rounded-lg shadow-sm 
        text-white font-medium
        ${isSubmitting 
          ? 'bg-red-300 cursor-not-allowed' 
          : 'bg-gradient-to-r from-red-400 to-red-300 hover:from-red-500 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400'
        }
        transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
      `}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <span className="flex items-center">
          {children}
          {icon}
        </span>
      )}
    </button>
  );
};

export default SubmitButton;