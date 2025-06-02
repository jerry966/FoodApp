import offerData from "../assets/json/Offers.json";

const Offers = () => {
  const { offers } = offerData;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="section-title mb-2">Special Offers</h1>
        <p className="title-base-secondary">
          Delicious deals that will make you hungry!
        </p>
      </div>

      {/* Offers Grid */}
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

      {/* Special Banner */}
      <div className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-4 md:mb-0">
            <h3 className="title-lg font-bold mb-2">
              🎉 Limited Time Mega Offer!
            </h3>
            <p className="subtitle-primary text-white/90">
              Use code{" "}
              <span className="font-bold bg-white/20 px-2 py-1 rounded">
                MEGA30
              </span>{" "}
              for 30% off on orders above $30. Don't miss this deal!
            </p>
          </div>
          <button className="bg-white text-primary hover:bg-gray-100 subtitle-primary font-bold py-3 px-6 rounded-lg transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
