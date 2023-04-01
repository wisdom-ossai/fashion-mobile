import { Link, useNavigate } from "react-router-dom";
import "./best-sale-section.css";
import { useEffect, useRef, useState } from "react";
import { ProductData } from "../../assets/data";
import Products from "../../views/home/components/products/Products";

const BestSaleSection = () => {
  const navigate = useNavigate();
  const navRef = useRef<any>(null);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setSticky(window.pageYOffset >= 280);
    });
  }, []);

  return (
    <section className="best-sale-section px-2">
      <div className={`section-nav ${sticky ? "sticky" : ""}`} ref={navRef}>
        <h3 className="title">Best Sale Product</h3>
        <Link to="/" className="navigator">
          See more
        </Link>
      </div>
      <Products data={ProductData} />
    </section>
  );
};

export default BestSaleSection;
