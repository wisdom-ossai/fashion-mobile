import { Link } from "react-router-dom";
import "./best-sale-section.css";
import { useEffect, useRef, useState } from "react";
import { Products } from "../../assets/data";

const BestSaleSection = () => {
  const navRef = useRef<any>(null);
  const [sticky, setSticky] = useState(false);
  const [hover, setHover] = useState<number | null>(null);
  const elem = document.getElementById("navbar");

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
      <div className="products">
        {Products.map((product) => (
          <div
            key={product.id}
            className={`product-item  ${hover === product.id ? "hover" : ""}`}
            onMouseEnter={() => setHover(product.id)}
            onMouseLeave={() => setHover(null)}
          >
            <span className="love">
              <i
                className={`ri-heart-${product.isFavorite ? "fill" : "line"}`}
              ></i>
            </span>
            <div className="image-container flexbox">
              <img
                width={100}
                height={100}
                src={product.imageUrl}
                alt="vintage"
                className="m-auto"
              />
            </div>
            <div
              className={`product-content pt-2 p-1 ${
                hover === product.id ? "hover" : ""
              }`}
            >
              <p className="category">{product.category}</p>
              <p className="description">{product.description}</p>
              <div className="flexbox justify-between mt-2">
                <p className="rating">
                  <i
                    className={`ri-star-${product.isRated ? "fill" : "line"}`}
                  ></i>
                  &nbsp;{product.rating} | {product.totalRating}
                </p>
                <p className="price">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestSaleSection;
