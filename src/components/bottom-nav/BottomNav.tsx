import { useLocation } from "react-router-dom";
import { NavItems } from "../../assets/data";
import "./bottom-nav.css";

const BottomNav = () => {
  const location = useLocation();
  return (
    <nav className="bottom-nav">
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
    </nav>
  );
};

export default BottomNav;
