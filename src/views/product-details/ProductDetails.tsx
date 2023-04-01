import "./product-details.css";
import productImg from "../../assets/shirt_full.png";
import Tab from "../../components/tab/Tab";
import AboutItem from "./components/about-item/AboutItem";

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
  return (
    <div className="product-details">
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
    </div>
  );
};

export default ProductDetails;
