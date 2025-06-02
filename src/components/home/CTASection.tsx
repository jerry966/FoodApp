import React from "react";
import Button from "../ui/Button";

type CTASectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-20 px-6 md:px-12 text-center">
      <div className="container mx-auto">
        <h2 className="section-title text-2xl md:text-3xl mb-4 text-center">
          {title}
        </h2>
        <p className="title-base-secondary text-center mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <Button to={buttonLink} variant="primary">
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
