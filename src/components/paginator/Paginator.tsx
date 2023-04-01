import "./paginator.css";

const Paginator = () => {
  return (
    <div className="pagination">
      <button className="btn">
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <a href="#" className="page-link  page-link--current">
        1
      </a>
      <a href="#" className="page-link">
        2
      </a>
      <a href="#" className="page-link">
        3
      </a>
      <span className="dots">...</span>
      <button className="btn open">
        <i className="ri-arrow-right-s-line"></i>
      </button>
    </div>
  );
};

export default Paginator;
