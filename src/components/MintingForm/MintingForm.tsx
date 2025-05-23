import React, { useState } from 'react';
import { ArrowRight, CircleDollarSign, FileCheck } from 'lucide-react';
import NumericInput from './NumericInput';
import PriceInput from './PriceInput';
import SubmitButton from './SubmitButton';
import MintingPreview from './MintingPreview';

const MintingForm: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [price, setPrice] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const totalCost = quantity * price;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    // Validate inputs
    if (quantity <= 0) {
      setError("Quantity must be greater than zero");
      setIsSubmitting(false);
      return;
    }
    
    if (price <= 0) {
      setError("Price must be greater than zero");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    try {
      // Simulating network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        // Reset form after success if needed
        // setQuantity(1);
        // setPrice(1);
      }, 3000);
    } catch (err) {
      setError("Transaction failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white bg-opacity-80 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden transition-all duration-300">
        <div className="bg-gradient-to-r from-red-300 to-red-200 p-6">
          <h2 className="text-2xl font-bold text-gray-800">Mint Your NFT</h2>
          <p className="text-gray-600 mt-1">Set quantity and price to mint</p>
        </div>
        
        {isSuccess ? (
          <div className="p-8 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-fade-in">
              <FileCheck className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Successfully Minted!</h3>
            <p className="text-gray-600 text-center">
              You have minted {quantity} NFT{quantity !== 1 ? 's' : ''} at {price} SUI each
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <MintingPreview />
            
            <NumericInput 
              label="Quantity to Mint"
              value={quantity}
              onChange={setQuantity}
            />
            
            <PriceInput 
              label="Price per NFT (SUI)"
              value={price}
              onChange={setPrice}
              min={1}
              step={1}
            />
            
            <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Cost</p>
                <p className="text-xl font-semibold text-gray-900 flex items-center">
                  <CircleDollarSign className="w-5 h-5 mr-1 text-red-400" />
                  {totalCost.toFixed(0)} SUI
                </p>
              </div>
              <div className="text-sm text-gray-500">
                ≈ ${(totalCost * 1.5).toFixed(2)} USD
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-3">
              <SubmitButton 
                isSubmitting={isSubmitting} 
                icon={<ArrowRight className="ml-2 w-5 h-5" />}
              >
                Mint Now
              </SubmitButton>
              <p className="text-sm text-red-400 bg-red-50 p-3 rounded-lg text-center">
                All contributions will be divided equally among participants
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default MintingForm;