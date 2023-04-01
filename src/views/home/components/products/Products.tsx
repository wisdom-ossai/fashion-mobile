import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../../interfaces";
import "./products.css";

interface IProductsProp {
  data: IProduct[];
}

const Products: FC<IProductsProp> = ({ data }) => {
  const navigate = useNavigate();
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="products">
      {data.map((product) => (
        <div
          onClick={() => navigate(`/product-details/${product.slug}`)}
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
  );
};

export default Products;
