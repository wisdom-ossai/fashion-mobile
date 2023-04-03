import "./product-details.css";
import productImg from "../../assets/shirt_full.png";
import Tab from "../../components/tab/Tab";
import AboutItem from "./components/about-item/AboutItem";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import BottomNav from "./components/bottom-nav/BottomNav";
import { motion as m } from "framer-motion";

const tabContent = [
  {
    id: 1,
    name: "About Item",
    disable: false,
    component: <AboutItem />,
  },
  {
    id: 2,
    name: "Reviews",
    disable: true,
    component: null,
  },
];

const ProductDetails = () => {
  const context: any = useOutletContext();

  useEffect(() => {
    if (context) {
      context.setIsMain(false);
      context.setTopNavBackground("#fff");
    }
  }, [context]);

  useEffect(() => {
    typeof window !== "undefined" && window.scrollTo(0, 0);
    return () => {
      context.setIsMain(true);
      context.setTopNavBackground("");
    };
  }, []);

  return (
    <div>
      <m.div
        initial={{ opacity: 0, y: "-50px" }}
        animate={{ opacity: 1, y: "0px" }}
        exit={{ opacity: 0, y: "-50px" }}
        transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        className="product-details"
      >
        <section className="header">
          <img src={productImg} width="100%" className="product-img" />
          <p className="p-id">tokoboju.id</p>
          <p className="description">
            Essentials Men's Short-Sleeve Crewneck T-Shirt
          </p>
          <div className="stat">
            <p>
              <i className="ri-star-fill"></i>&nbsp; 4.9 Ratings
            </p>
            <p>2.3k+ Reviews</p>
            <p>2.9k+ Sold</p>
          </div>
        </section>

        <section className="py-2">
          <Tab data={tabContent} />
        </section>
      </m.div>

      <BottomNav />
    </div>
  );
};

export default ProductDetails;
