import { useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import "./bottom-nav.css";

const BottomNav = () => {
  return (
    <m.nav
      initial={{ opacity: 0.85, y: "20px" }}
      animate={{ opacity: 1, y: "0px" }}
      exit={{ opacity: 0.85, y: "20px" }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeIn" }}
      className="bottom-secondary-nav"
    >
      <div className="bottom-nav-items justify-between">
        <div>
          <p style={{ fontSize: ".75rem" }}>Total Price</p>
          <p className="price text-primary bold-font">$18.00</p>
        </div>
        <div className="flex">
          <div
            className="bg-primary flexbox px-2"
            style={{
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          >
            <i className="ri-shopping-bag-line"></i>&nbsp; 1
          </div>
          <div
            className="bg-dark flexbox px-2"
            style={{
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </div>
        </div>
      </div>
    </m.nav>
  );
};

export default BottomNav;
