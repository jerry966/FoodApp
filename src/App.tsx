import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./AppRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
