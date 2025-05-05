import React from 'react';
import { ImageIcon } from 'lucide-react';

const MintingPreview: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
      <div className="relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center group">
        <ImageIcon className="w-8 h-8 text-white opacity-70" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900">Celestial Collection</h3>
        <p className="text-xs text-gray-500">Limited edition NFT series</p>
        <div className="mt-1 text-xs text-gray-700">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Available: 100
          </span>
        </div>
      </div>
    </div>
  );
};

export default MintingPreview;