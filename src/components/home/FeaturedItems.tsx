import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

type FeaturedItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  rating: number;
  prepTime: string;
};

type FeaturedItemsProps = {
  featuredItems: FeaturedItem[];
};

const FeaturedItems: React.FC<FeaturedItemsProps> = ({ featuredItems }) => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto">
        <SectionTitle
          title="Featured Items"
          subtitle="Our most popular dishes loved by customers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
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
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
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
                  <button className="bg-primary hover:bg-primary/80 text-white subtitle-primary py-2 px-4 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-10">
          <Button variant="outline">View All Menu</Button>
        </div> */}
      </div>
    </section>
  );
};

export default FeaturedItems;
