import { useLocation } from "react-router-dom";
import "./bottom-nav.css";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
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
    </nav>
  );
};

export default BottomNav;
