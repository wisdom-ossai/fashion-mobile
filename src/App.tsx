import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/home/Home";
import ProductDetails from "./views/product-details/ProductDetails";
import BestSale from "./views/best-sale/BestSale";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
