import React from "react";
import { Link } from "react-router-dom";

type HeroProps = {
  title: string;
  subtitle: string;
  image: string;
  primaryButton: {
    text: string;
    link: string;
  };
  secondaryButton: {
    text: string;
    link: string;
  };
};

const HeroSection: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  primaryButton,
  secondaryButton,
}) => {
  return (
    <section className="relative">
      <div className="h-[500px] w-full overflow-hidden">
        <img
          src={image}
          alt="Delicious Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to={primaryButton.link}
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition-colors backdrop-blur-sm"
          >
            {primaryButton.text}
          </Link>
          <Link
            to={secondaryButton.link}
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition-colors backdrop-blur-sm"
          >
            {secondaryButton.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
