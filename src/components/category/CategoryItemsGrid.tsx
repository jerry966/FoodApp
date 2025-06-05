import React from "react";
import Card from "../ui/Card";

type FoodItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  prepTime: string;
};

type CategoryItemsGridProps = {
  items: FoodItem[];
};

const CategoryItemsGrid: React.FC<CategoryItemsGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Card key={item.id}>
          <div className="h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="title-lg">{item.name}</h3>
              <span
                className={`${
                  item.category === "veg"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                } text-xs px-2 py-1 rounded-full`}
              >
                {item.category === "veg" ? "VEG" : "NON-VEG"}
              </span>
            </div>
            <p className="subtitle-secondary mb-4">{item.description}</p>
            <div className="flex items-center mb-3">
              <div className="flex text-secondary">
                {[...Array(Math.floor(item.rating))].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {item.rating % 1 !== 0 && <span>☆</span>}
              </div>
              <span className="text-xs text-gray-500 ml-2">
                {item.rating.toFixed(1)}
              </span>
              <span className="text-xs text-gray-500 ml-auto">
                {item.prepTime}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold text-main">{item.price}</span>
              <button className="bg-main hover:bg-main/80 text-white subtitle-primary py-2 px-4 rounded-lg transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CategoryItemsGrid;
