import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";

type Category = {
  id: number;
  name: string;
  icon: string;
  link: string;
  description: string;
};

type CategorySectionProps = {
  categories: Category[];
};

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="Food Categories"
          subtitle="Explore our wide range of delicious options"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.id}
              className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <span className="text-4xl mb-3">{category.icon}</span>
              <h3 className="title-base-primary">{category.name}</h3>
              <p className="subtitle-secondary mt-1">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
