import featuredData from "../assets/json/FeaturedItems.json";
import categoriesData from "../assets/json/FoodCategories.json";
import reviewsData from "../assets/json/CustomReviews.json";
import howItWorksData from "../assets/json/HowItWorks.json";
import heroData from "../assets/json/HeroSection.json";
import HeroSection from "../components/home/HeroSection";
import CategorySection from "../components/home/CategorySection";
import FeaturedItems from "../components/home/FeaturedItems";
import OfferBanner from "../components/home/OfferBanner";
import HowItWorks from "../components/home/HowItWorks";
import TestimonialSection from "../components/home/TestimonialSection";
import AppDownload from "../components/home/AppDownload";
import CTASection from "../components/home/CTASection";


const Home = () => {
  const { featuredItems } = featuredData;
  const { categories } = categoriesData;
  const { reviews } = reviewsData;
  const { steps } = howItWorksData;
  const { hero } = heroData;

  return (
    <div className="font-poppins">
      <HeroSection
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        primaryButton={hero.primaryButton}
        secondaryButton={hero.secondaryButton}
      />

      <CategorySection categories={categories} />

      <FeaturedItems featuredItems={featuredItems} />

      <OfferBanner
        title="🎉 Special Offers Just For You!"
        description="Discover amazing deals and discounts on your favorite meals. Limited time offers available!"
        buttonText="View All Offers"
        buttonLink="/offers"
      />

      <HowItWorks steps={steps} />

      <TestimonialSection reviews={reviews} />

      <AppDownload />

      <CTASection
        title="Ready to Order?"
        description="Browse our menu and start your food journey today with FoodieApp. Fresh, delicious meals are just a few clicks away!"
        buttonText="Order Now"
        buttonLink="/categories"
      />
    </div>
  );
};

export default Home;
