import React, { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import SearchInput from './searchInput';
import ImageGrid from './ImageGrid';
import useDebounce from '../hooks/useDebounce';
import { fetchImages } from '../services/ImageService';
import { Image } from '../types/imageTypes';

const ImageSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const searchInput = useRef<HTMLInputElement | null>(null);
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  const { data: images = [], error, isLoading } = useQuery<Image[], Error>({
    queryKey: ['images', debouncedSearchTerm, page],
    queryFn: async () => {
      if (!debouncedSearchTerm) return [];
      return await fetchImages(debouncedSearchTerm, page);
    },
    enabled: !!debouncedSearchTerm,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <SearchInput
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search for photos..."
        ref={searchInput}
      />
      {isLoading && <div className="mt-4 text-gray-500">Loading...</div>}
      {error && <div className="mt-4 text-red-500">Error fetching images: {error.message}</div>}
      <ImageGrid images={images} />
      <div className="flex justify-between w-full max-w-md mt-4">
        <button 
          onClick={handlePreviousPage} 
          disabled={page === 1} 
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
        >
          Previous
        </button>
        <button 
          onClick={handleNextPage} 
          className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSearch;