import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import ProductDetails from "./views/product-details/ProductDetails";
import BestSale from "./views/best-sale/BestSale";

function App() {
  return (
    <div className="screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/best-sale" element={<BestSale />} />
      </Routes>
    </div>
  );
}

export default App;
