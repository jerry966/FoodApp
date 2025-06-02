import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const Offers = lazy(() => import("./pages/Offers"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
const NonVeg = lazy(() => import("./pages/NonVeg"));
const Veg = lazy(() => import("./pages/Veg"));


// Loading fallback component
const LoadingFallback = () => (
  <div className="container text-center mt-5">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <p className="mt-2">Loading...</p>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />

        {/* Specific category routes */}
        <Route path="/category/veg" element={<Veg />} />
        <Route path="/category/non-veg" element={<NonVeg />} />

        {/* Generic category route for any other types */}
        <Route path="/category/:type" element={<CategoryPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
