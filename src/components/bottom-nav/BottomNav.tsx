import { useLocation } from "react-router-dom";
import { motion as m } from "framer-motion";
import { NavItems } from "../../assets/data";
import "./bottom-nav.css";

const BottomNav = () => {
  const location = useLocation();
  return (
    <m.nav
      initial={{ opacity: 0.85, y: "20px" }}
      animate={{ opacity: 1, y: "0px" }}
      exit={{ opacity: 0.85, y: "20px" }}
      transition={{ delay: 0.25, duration: 0.5, ease: "easeIn" }}
      className="bottom-nav"
    >
      <div className="bottom-nav-items">
        {NavItems.map((navItem) => (
          <div key={navItem.id} className="bottom-nav-item">
            <div
              className={`icon ${
                location.pathname === navItem.path ? "active" : ""
              }`}
            >
              <i
                className={`ri-lg ri-${navItem.id}-${
                  location.pathname === navItem.path ? "fill" : "line"
                }`}
              ></i>
            </div>
            <p
              className={`name ${
                location.pathname === navItem.path ? "active" : ""
              }`}
            >
              {navItem.name}
            </p>
          </div>
        ))}
      </div>
    </m.nav>
  );
};

export default BottomNav;
