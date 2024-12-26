import React, { forwardRef } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({ value, onChange, placeholder }, ref) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      <span className="p-2 text-gray-500">
        <FaSearch />
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        className="flex-1 p-2 outline-none rounded-lg focus:ring-0"
      />
    </div>
  );
});

SearchInput.displayName = 'SearchInput';

export default SearchInput;