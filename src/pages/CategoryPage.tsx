import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import featuredData from "../assets/json/FeaturedItems.json";
import categoriesData from "../assets/json/FoodCategories.json";
import SectionTitle from "../components/ui/SectionTitle";
import CategoryBanner from "../components/category/CategoryBanner";
import CategoryFilter from "../components/category/CategoryFilter";
import CategoryItemsGrid from "../components/category/CategoryItemsGrid";

const CategoryPage = () => {
  const { type } = useParams<{ type: string }>();
  const [filteredItems, setFilteredItems] = useState(
    featuredData.featuredItems
  );
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Find the current category from the categories data
  const currentCategory = categoriesData.categories.find(
    (category) => category.link === `/category/${type}`
  );

  // Filter items based on category and other filters
  useEffect(() => {
    let items = [...featuredData.featuredItems];

    // Filter by category if it's not the "all" category
    if (type && type !== "all") {
      items = items.filter((item) => {
        if (type === "veg" || type === "non-veg") {
          return item.category === type;
        }

        // For other category types (like pizza, burgers, etc.)
        // Note: This is a simplified implementation
        // You may need to add a 'subcategory' field to your items data
        return item.name.toLowerCase().includes(type.toLowerCase());
      });
    }

    // Apply active filters (dietary, cuisine type, etc.)
    if (activeFilters.length > 0) {
      // This is simplified - you would expand this based on your actual filters
      items = items.filter((item) => {
        return activeFilters.some((filter) => {
          if (filter === "veg") return item.category === "veg";
          if (filter === "non-veg") return item.category === "non-veg";
          return true;
        });
      });
    }

    // Apply price filter
    items = items.filter((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Apply sorting
    if (sortOption === "price-low-high") {
      items.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    } else if (sortOption === "price-high-low") {
      items.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    } else if (sortOption === "rating") {
      items.sort((a, b) => b.rating - a.rating);
    }

    setFilteredItems(items);
  }, [type, sortOption, priceRange, activeFilters]);

  // Handle filter changes
  const handleFilterChange = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Handle sort change
  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  // Handle price range change
  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryBanner
        title={
          currentCategory ? currentCategory.name : type || "All Categories"
        }
        description={
          currentCategory
            ? currentCategory.description
            : "Browse all our delicious food items"
        }
        icon={currentCategory ? currentCategory.icon : "🍽️"}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4">
            <CategoryFilter
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              sortOption={sortOption}
              onSortChange={handleSortChange}
              priceRange={priceRange}
              onPriceRangeChange={handlePriceRangeChange}
            />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <SectionTitle
                title={`${filteredItems.length} items found`}
                centered={false}
              />

              {/* Mobile Filter/Sort Button */}
              <button className="md:hidden bg-white py-2 px-4 rounded-lg shadow-md text-primary">
                Filter & Sort
              </button>
            </div>

            {filteredItems.length > 0 ? (
              <CategoryItemsGrid items={filteredItems} />
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">
                  No items found matching your criteria.
                </p>
                <button
                  className="mt-4 bg-secondary text-white px-4 py-2 rounded-lg"
                  onClick={() => {
                    setActiveFilters([]);
                    setPriceRange([0, 50]);
                    setSortOption("default");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
