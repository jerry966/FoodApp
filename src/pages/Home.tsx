import { Link } from "react-router-dom";
import featuredData from "../assets/json/FeaturedItems.json";
import categoriesData from "../assets/json/FoodCategories.json";
import reviewsData from "../assets/json/CustomReviews.json";
import howItWorksData from "../assets/json/HowItWorks.json";
import heroData from "../assets/json/HeroSection.json";

const Home = () => {
  const { featuredItems } = featuredData;
  const { categories } = categoriesData;
  const { reviews } = reviewsData;
  const { steps } = howItWorksData;
  const { hero } = heroData;

  return (
    <div className="font-poppins">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-[500px] w-full overflow-hidden">
          <img
            src={hero.image}
            alt="Delicious Food"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {hero.title}
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to={hero.primaryButton.link}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition-colors backdrop-blur-sm"
            >
              {hero.primaryButton.text}
            </Link>
            <Link
              to={hero.secondaryButton.link}
              className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-bold transition-colors backdrop-blur-sm"
            >
              {hero.secondaryButton.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-2xl md:text-3xl mb-2 text-center">
            Food Categories
          </h2>
          <p className="title-base-secondary text-center mb-10">
            Explore our wide range of delicious options
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                to={category.link}
                key={category.id}
                className="bg-white rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <span className="text-4xl mb-3">{category.icon}</span>
                <h3 className="title-base-primary">{category.name}</h3>
                <p className="subtitle-secondary mt-1">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="section-title text-2xl md:text-3xl mb-2 text-center">
            Featured Items
          </h2>
          <p className="title-base-secondary text-center mb-10">
            Our most popular dishes loved by customers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="title-lg">{item.name}</h3>
                    <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full">
                      {item.category === "veg" ? "VEG" : "NON-VEG"}
                    </span>
                  </div>
                  <p className="subtitle-secondary mb-4">{item.description}</p>
                  <div className="flex items-center mb-3">
                    <div className="flex text-secondary">
                      {[...Array(Math.floor(item.rating))].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                      {item.rating % 1 !== 0 && <span>☆</span>}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">
                      {item.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">
                      {item.prepTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-main">{item.price}</span>
                    <button className="bg-primary hover:bg-primary/80 text-white subtitle-primary py-2 px-4 rounded-lg transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors">
              View All Menu
            </button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-8 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-4 md:mb-0">
                <h3 className="title-lg font-bold text-white mb-2">
                  🎉 Special Offers Just For You!
                </h3>
                <p className="subtitle-primary text-white/90">
                  Discover amazing deals and discounts on your favorite meals.
                  Limited time offers available!
                </p>
              </div>
              <Link
                to="/offers"
                className="bg-white text-primary hover:bg-gray-100 subtitle-primary font-bold py-3 px-6 rounded-lg transition-colors"
              >
                View All Offers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="section-title text-2xl md:text-3xl mb-2 text-center">
            How It Works
          </h2>
          <p className="title-base-secondary text-center mb-10">
            Order in just a few easy steps
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mb-4`}
                >
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="title-lg mb-2">{step.title}</h3>
                <p className="subtitle-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="section-title text-2xl md:text-3xl mb-2 text-center">
            Customer Reviews
          </h2>
          <p className="title-base-secondary text-center mb-10">
            What our customers say about us
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={review.profileImage}
                    alt={review.name}
                    className="h-12 w-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="subtitle-primary text-main">
                      {review.name}
                    </h4>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-secondary mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="subtitle-secondary">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                Download Our Mobile App
              </h2>
              <p className="mb-6 text-white/80">
                Get exclusive app-only offers and track your delivery in
                real-time. Available for iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black hover:bg-black/80 text-white px-6 py-3 rounded-lg flex items-center transition-colors">
                  <span className="mr-2">📱</span> App Store
                </button>
                <button className="bg-black hover:bg-black/80 text-white px-6 py-3 rounded-lg flex items-center transition-colors">
                  <span className="mr-2">📱</span> Google Play
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=500&h=500"
                alt="Mobile App"
                className="w-64 rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 text-center">
        <div className="container mx-auto">
          <h2 className="section-title text-2xl md:text-3xl mb-4 text-center">
            Ready to Order?
          </h2>
          <p className="title-base-secondary text-center mb-8 max-w-2xl mx-auto">
            Browse our menu and start your food journey today with FoodieApp.
            Fresh, delicious meals are just a few clicks away!
          </p>
          <Link
            to="/categories"
            className="bg-main hover:bg-white/90 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg inline-block"
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
