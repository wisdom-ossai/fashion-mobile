import RatingChart from "../rating-chart/RatingChart";
import reviewImg1 from "../../../../assets/review_img_1.png";
import reviewImg2 from "../../../../assets/review_img_2.png";
import reviewImg3 from "../../../../assets/review_img_3.png";
import reviewImg4 from "../../../../assets/review_img_4.png";
import "./about-item.css";
import Dropdown from "../../../../components/dropdown/Dropdown";
import Reviewer from "../reviewer/Reviewer";
import Paginator from "../../../../components/paginator/Paginator";
import Products from "../../../home/components/products/Products";
import { ProductData } from "../../../../assets/data";

const AboutItem = () => {
  return (
    <div className="about-item px-2">
      <div className="flex justify-between">
        <div className="info">
          <p className="label">Brand: </p> <p className="value">ChArmkpR</p>
        </div>
        <div className="info">
          <p className="label">Color: </p> <p className="value">Aprikot</p>
        </div>
      </div>

      <div>
        <h5>Description:</h5>
        <ul>
          <li>
            Long sleev dress shirt in classic fit featuring button-down collar
          </li>
          <li>Patch Pocket on Left Chest</li>
          <li>Durable Combination Cutton Fabric</li>
          <li>Comfortable and quality dress shirt</li>
          <li>Go To classic button down shirt for all special occasions</li>
        </ul>
        <p style={{ fontSize: ".75rem" }}>
          Chat us if there is anything you need to ask about the product :)
        </p>

        <button className="btn-text-primary">Show less</button>
      </div>

      <div className="hr" />

      <div>
        <h5>Shipping Information</h5>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "1rem",
          }}
        >
          <div className="info">
            <p className="label">Delivery: </p>{" "}
            <p className="value">Shipping from Jakata Indonesia</p>
          </div>
          <div className="info">
            <p className="label">Shipping: </p>{" "}
            <p className="value">FREE International Shipping</p>
          </div>
          <div className="info">
            <p className="label">Arrive: </p>{" "}
            <p className="value">Estimated Arrival on 25-04-2023</p>
          </div>
        </div>
      </div>

      <div className="hr" />

      <div>
        <h5>Review & Ratings</h5>

        <div className="rating-detail">
          <div className="top">
            <div>
              <div className="rated">
                <h3>4.9</h3> <p>/</p> <p>5.0</p>
              </div>
              <div>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-line"></i>
              </div>
            </div>

            <p>2.3k Reviews</p>
          </div>
          <RatingChart />
        </div>

        <div>
          <h5>Reviews with images and videos</h5>

          <div className="review-imgs">
            <img
              style={{ width: "100%", height: "auto" }}
              src={reviewImg1}
              alt="review-1"
            />
            <img
              style={{ width: "100%", height: "auto" }}
              src={reviewImg2}
              alt="review-2"
            />
            <img
              style={{ width: "100%", height: "auto" }}
              src={reviewImg3}
              alt="review-3"
            />
            <img
              style={{ width: "100%", height: "auto" }}
              src={reviewImg4}
              alt="review-4"
            />
          </div>
        </div>
      </div>

      <div className="hr" />

      <div>
        <div className=" top-reviews flex justify-between">
          <div>
            <h5>Top Reviews</h5>
            <p>Showing 3 of 2.3k+ reviews</p>
          </div>
          <div>
            <Dropdown menuItems={[{ label: "Popular", value: "popular" }]} />
          </div>
        </div>

        <div>
          <Reviewer />
          <Reviewer />
          <Reviewer />
        </div>

        <div className="flex justify-between align-center mt-2">
          <button className="btn-text-primary flex align-center justify-center">
            <i className="ri-thumb-up-fill"></i> &nbsp; Helpful?
          </button>
          <p>Yesterday</p>
        </div>
      </div>

      <div className="hr" />

      <div className="flex justify-between align-center">
        <Paginator />
        <button className="btn-text-primary">See more</button>
      </div>

      <div className="recommendation">
        <h5>Recommendations</h5>
        <div>
          <Products data={ProductData.slice(5, 12)} />
        </div>
      </div>
    </div>
  );
};

export default AboutItem;
