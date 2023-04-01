import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./views/home/Home";
import ProductDetails from "./views/product-details/ProductDetails";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
