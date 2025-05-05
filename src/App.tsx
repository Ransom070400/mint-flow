import React from 'react';
import MintingForm from './components/MintingForm/MintingForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex flex-col items-center justify-center p-6">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">NFT Minting Portal</h1>
        <p className="text-gray-600 max-w-md">Create your unique digital collectibles with our simple minting process</p>
      </header>
      
      <MintingForm />
      
      <footer className="mt-12 text-center text-gray-500 text-sm">
        <p>Gas fees may apply. All transactions are secured on the blockchain.</p>
      </footer>
    </div>
  );
}

export default App;