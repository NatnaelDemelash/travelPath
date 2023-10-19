import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Map from "./pages/Map";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<Map />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
