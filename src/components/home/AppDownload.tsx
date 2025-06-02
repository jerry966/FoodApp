import React from "react";

const AppDownload: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
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
  );
};

export default AppDownload;
