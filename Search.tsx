import React, { useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<string[]>([]);

  const handleSearch = () => {
    // Lógica para realizar a busca com os filtros selecionados
    console.log('Realizando busca por:', searchTerm);
    console.log('Filtros selecionados:', filters);
  };

  const handleFilterChange = (filter: string) => {
    // Verifica se o filtro já está selecionado e remove, ou adiciona se estiver desmarcado
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
        placeholder="Digite sua busca..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex space-x-4 mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            checked={filters.includes('filter1')}
            onChange={() => handleFilterChange('filter1')}
          />
          <span>Filter 1</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            checked={filters.includes('filter2')}
            onChange={() => handleFilterChange('filter2')}
          />
          <span>Filter 2</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox text-indigo-600"
            checked={filters.includes('filter3')}
            onChange={() => handleFilterChange('filter3')}
          />
          <span>Filter 3</span>
        </label>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
