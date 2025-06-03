import React from "react";

type CategoryBannerProps = {
  title: string;
  description: string;
  icon: string;
};

const CategoryBanner: React.FC<CategoryBannerProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="bg-gradient-to-r from-primary to-secondary py-12 px-4 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-5xl mr-4">{icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
              <p className="text-white/80">{description}</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
            <p className="font-semibold">Hungry for {title}?</p>
            <p className="text-sm">Delivery in 30-45 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
