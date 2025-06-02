import "./index.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./AppRoute";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
