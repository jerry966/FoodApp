import React from "react";

type CategoryFilterProps = {
  activeFilters: string[];
  onFilterChange: (filter: string) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeFilters,
  onFilterChange,
  sortOption,
  onSortChange,
  priceRange,
  onPriceRangeChange,
}) => {
  // Filter groups
  const dietaryFilters = [
    { id: "veg", label: "Vegetarian" },
    { id: "non-veg", label: "Non-Vegetarian" },
  ];

  const cuisineFilters = [
    { id: "indian", label: "Indian" },
    { id: "italian", label: "Italian" },
    { id: "american", label: "American" },
    { id: "chinese", label: "Chinese" },
  ];

  // Handler for price range input
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onPriceRangeChange([value, priceRange[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    onPriceRangeChange([priceRange[0], value]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-6">
        <h3 className="title-base-primary mb-4">Sort By</h3>
        <select
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="default">Recommended</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="title-base-primary mb-4">Price Range</h3>
        <div className="flex items-center justify-between">
          <input
            type="number"
            min="0"
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={handleMinPriceChange}
            className="w-20 p-2 border border-gray-300 rounded-md"
          />
          <span className="mx-2">to</span>
          <input
            type="number"
            min={priceRange[0]}
            value={priceRange[1]}
            onChange={handleMaxPriceChange}
            className="w-20 p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="title-base-primary mb-4">Dietary</h3>
        {dietaryFilters.map((filter) => (
          <div key={filter.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={filter.id}
              checked={activeFilters.includes(filter.id)}
              onChange={() => onFilterChange(filter.id)}
              className="mr-2"
            />
            <label htmlFor={filter.id} className="subtitle-secondary">
              {filter.label}
            </label>
          </div>
        ))}
      </div>

      <div>
        <h3 className="title-base-primary mb-4">Cuisine</h3>
        {cuisineFilters.map((filter) => (
          <div key={filter.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={filter.id}
              checked={activeFilters.includes(filter.id)}
              onChange={() => onFilterChange(filter.id)}
              className="mr-2"
            />
            <label htmlFor={filter.id} className="subtitle-secondary">
              {filter.label}
            </label>
          </div>
        ))}
      </div>

      <button
        className="w-full mt-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-primary transition-colors"
        onClick={() => {
          onPriceRangeChange([0, 50]);
          onSortChange("default");
          activeFilters.forEach((filter) => onFilterChange(filter));
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default CategoryFilter;
