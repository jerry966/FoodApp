import React from "react";
import Button from "../ui/Button";

type SpecialBannerProps = {
  title: string;
  description: string;
  buttonText: string;
};

const SpecialBanner: React.FC<SpecialBannerProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-4 md:mb-0">
          <h3 className="title-lg font-bold mb-2">{title}</h3>
          <p
            className="subtitle-primary text-white/90"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <Button variant="white">{buttonText}</Button>
      </div>
    </div>
  );
};

export default SpecialBanner;
