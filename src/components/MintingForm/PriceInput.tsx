import React from 'react';
import { Coins } from 'lucide-react';

interface PriceInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  step?: number;
}

const PriceInput: React.FC<PriceInputProps> = ({
  label,
  value,
  onChange,
  min = 1,
  step = 1
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue) && newValue >= min) {
      onChange(newValue);
    }
  };

  const priceOptions = [1, 5, 10, 50, 100];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Coins className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          min={min}
          step={step}
          className="block w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-red-400 focus:border-red-400 outline-none transition-all duration-150"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">Currency</label>
          <div className="px-3 py-2 text-gray-500">
            SUI
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-2">
        {priceOptions.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`px-3 py-1 text-xs rounded-full transition-all duration-150 ${
              value === option
                ? 'bg-red-100 text-red-700 border border-red-300'
                : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
            }`}
          >
            {option} SUI
          </button>
        ))}
      </div>
    </div>
  );
};

export default PriceInput;