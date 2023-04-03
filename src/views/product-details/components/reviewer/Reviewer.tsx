import profile from "../../../../assets/profile.jpg";
import more from "../../../../assets/more.png";
import RatingBadge from "../rating-badge/RatingBadge";

import "./reviewer.css";

const Reviewer = () => {
  return (
    <div className="reviewer pt-2">
      <div className="flex justify-between align-center">
        <div className="profile flex align-center">
          <img
            width={24}
            height={24}
            className="profile-img rounded"
            src={profile}
            alt="reviewer-profile"
          />
          <p style={{ marginLeft: ".5rem" }}>Eren Yr****y</p>
        </div>
        <div className="rating">
          <p className="flexbox">
            <i className="ri-star-fill"></i>&nbsp; 5.0 &nbsp;&nbsp;{" "}
            <img className="more-img" width={16} src={more} alt="more" />
          </p>
        </div>
      </div>
      <div className="review-descriptions mt-2">
        <RatingBadge description="Product in good condition" />
        <RatingBadge description="Very fast delivery" />
        <RatingBadge description="Fast seller response" />
      </div>
      <p className="mt-2 text-dark">
        According to my expection this is the best
      </p>
    </div>
  );
};

export default Reviewer;
