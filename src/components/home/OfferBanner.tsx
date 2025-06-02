import React from "react";
import Button from "../ui/Button";

type OfferBannerProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const OfferBanner: React.FC<OfferBannerProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-8 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-4 md:mb-0">
              <h3 className="title-lg font-bold text-white mb-2">{title}</h3>
              <p className="subtitle-primary text-white/90">{description}</p>
            </div>
            <Button to={buttonLink} variant="white">
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
