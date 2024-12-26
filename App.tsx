import React from 'react';
import ImageSearch from './components/ImageSearch';

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">Image Search</h1>
      <ImageSearch />
    </div>
  );
};

export default App;
