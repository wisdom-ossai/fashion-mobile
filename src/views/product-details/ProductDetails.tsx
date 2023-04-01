import "./product-details.css";
import productImg from "../../assets/shirt_full.png";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="header">
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
      </div>
    </div>
  );
};

export default ProductDetails;
