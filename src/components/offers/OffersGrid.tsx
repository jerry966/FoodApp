import React from "react";
import SectionTitle from "../ui/SectionTitle";

type Offer = {
  id: number;
  title: string;
  code: string;
  description: string;
  expiry: string;
  image: string;
};

type OffersGridProps = {
  offers: Offer[];
};

const OffersGrid: React.FC<OffersGridProps> = ({ offers }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionTitle
        title="Special Offers"
        subtitle="Delicious deals that will make you hungry!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-2/5">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:w-3/5">
                <div className="bg-secondary/20 section-title px-2 py-1 rounded-full inline-block mb-2">
                  CODE: {offer.code}
                </div>
                <h2 className="title-lg mb-2">{offer.title}</h2>
                <p className="subtitle-secondary mb-4">{offer.description}</p>
                <div className="flex justify-between items-center">
                  <p className="small-text text-gray-500">
                    Valid till: {offer.expiry}
                  </p>
                  <button className="bg-primary hover:bg-primary/80 text-white subtitle-primary py-2 px-4 rounded-lg transition-colors">
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersGrid;
