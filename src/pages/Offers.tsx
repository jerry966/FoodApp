import offerData from "../assets/json/Offers.json";
import OffersGrid from "../components/offers/OffersGrid";
import SpecialBanner from "../components/offers/SpecialBanner";

const Offers = () => {
  const { offers } = offerData;

  return (
    <div className="container mx-auto px-4 py-8">
      <OffersGrid offers={offers} />

      <SpecialBanner
        title="🎉 Limited Time Mega Offer!"
        description={
          'Use code <span class="font-bold bg-white/20 px-2 py-1 rounded">MEGA30</span> for 30% off on orders above $30. Don\'t miss this deal!'
        }
        buttonText="Order Now"
      />
    </div>
  );
};

export default Offers;
