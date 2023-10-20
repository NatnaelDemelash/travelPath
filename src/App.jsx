import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<p>List of cities</p>} />
            <Route path="cities" element={<p>List of Cities</p>} />
            <Route path="countries" element={<p>List of Countries</p>} />
            <Route path="form" element={<p>List of Form</p>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
