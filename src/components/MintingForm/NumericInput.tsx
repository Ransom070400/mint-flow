import React from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

interface NumericInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

const NumericInput: React.FC<NumericInputProps> = ({
  label,
  value,
  onChange,
  min = 1,
  max = 1000000000
}) => {
  const increment = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex items-center">
        <button
          type="button"
          onClick={decrement}
          disabled={value <= min}
          className={`p-2 rounded-l-lg border border-r-0 border-gray-300 ${
            value <= min 
              ? 'bg-gray-100 text-gray-400' 
              : 'bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100'
          } transition-colors duration-150`}
        >
          <MinusCircle className="w-5 h-5" />
        </button>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          className="block w-full py-2 px-3 border border-gray-300 text-center text-gray-900 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-150"
        />
        <button
          type="button"
          onClick={increment}
          disabled={value >= max}
          className={`p-2 rounded-r-lg border border-l-0 border-gray-300 ${
            value >= max 
              ? 'bg-gray-100 text-gray-400' 
              : 'bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100'
          } transition-colors duration-150`}
        >
          <PlusCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NumericInput;