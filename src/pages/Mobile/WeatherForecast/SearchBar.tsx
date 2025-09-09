import React from 'react';

export const SearchBar: React.FC = () => {
  return (
    <div className="w-full mb-2 mt-2  max-w-md mx-auto  bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-4">
      {/* Search Form */}
      <form className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search city..."
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Mock Results */}
      <div className="mt-3 space-y-2">
        <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm">
          Manila, NCR (Philippines)
        </button>
        <button className="w-full text-left px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm">
          Quezon City, NCR (Philippines)
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
