import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { useEffect, useState } from "react";
import CitiyList from "./components/CitiyList";
import CountryList from "./components/CountryList";
import CityDetail from "./components/CityDetail";
import Form from "./components/Form";

const App = () => {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = " http://localhost:7000";

  useEffect(() => {
    const getCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Problem during fetching cities...");
      } finally {
        setIsLoading(false);
      }
    };
    getCities();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route
              index
              element={<CitiyList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path="cities"
              element={<CitiyList cities={cities} isLoading={isLoading} />}
            />
            <Route path="cities/:id" element={<CityDetail />} />
            <Route
              path="countries"
              element={<CountryList cities={cities} isLoading={isLoading} />}
            />
            <Route path="form" element={<Form />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
