// filepath: c:\Users\richa\OneDrive\Desktop\Richa\GitHubReactProject\FoodApp\src\AppRoutes.tsx
import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PageTransition from "./components/ui/PageTransition";

// Loading component for Suspense
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-[70vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-main"></div>
  </div>
);

// Lazy load all pages
const Home = lazy(() => import("./pages/Home"));
const Offers = lazy(() => import("./pages/Offers"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// Define routes configuration array
const routes = [
  {
    path: "/",
    caseSensitive: true,
    element: (
      <PageTransition>
        <Home />
      </PageTransition>
    ),
  },
  {
    path: "/offers",
    caseSensitive: true,
    element: (
      <PageTransition>
        <Offers />
      </PageTransition>
    ),
  },
  {
    path: "/category/:type",
    caseSensitive: true,
    element: (
      <PageTransition>
        <CategoryPage />
      </PageTransition>
    ),
  },
  // {
  //   path: "/404",
  //   caseSensitive: true,
  //   element: (
  //     <PageTransition>
  //       <NotFound />
  //     </PageTransition>
  //   ),
  // },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
            caseSensitive={route.caseSensitive}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
