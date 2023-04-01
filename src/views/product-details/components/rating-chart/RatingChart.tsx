import "./rating-chart.css";

const RatingChart = () => {
  return (
    <div className="rating-percents">
      <div className="rating-percent">
        <span className="rating-no">
          <i className="ri-star-fill"></i>&nbsp;5
        </span>
        <div className="rating-progress"></div>
        <span className="rating-percent-no">84%</span>
      </div>
      <div className="rating-percent">
        <span className="rating-no">
          <i className="ri-star-fill"></i>&nbsp;4
        </span>
        <div className="rating-progress"></div>
        <span className="rating-percent-no">9%</span>
      </div>
      <div className="rating-percent">
        <span className="rating-no">
          <i className="ri-star-fill"></i>&nbsp;3
        </span>
        <div className="rating-progress"></div>
        <span className="rating-percent-no">4%</span>
      </div>
      <div className="rating-percent">
        <span className="rating-no">
          <i className="ri-star-fill"></i>&nbsp;2
        </span>
        <div className="rating-progress"></div>
        <span className="rating-percent-no">2%</span>
      </div>
      <div className="rating-percent">
        <span className="rating-no">
          <i className="ri-star-fill"></i>&nbsp;1
        </span>
        <div className="rating-progress"></div>
        <span className="rating-percent-no">1%</span>
      </div>
    </div>
  );
};

export default RatingChart;
