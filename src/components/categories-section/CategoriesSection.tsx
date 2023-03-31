import "./categories-section.css";

const CategoriesSection = () => {
  return (
    <section className="categories-section  px-2">
      <div className="items">
        <div className="item">
          <div className="item-icon">
            <i className="ri-function-line"></i>
          </div>
          <p className="item-name">Category</p>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className="ri-plane-line"></i>
          </div>
          <p className="item-name">Flight</p>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className="ri-bill-line"></i>
          </div>
          <p className="item-name">Bill</p>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className="ri-global-line"></i>
          </div>
          <p className="item-name">Data Plan</p>
        </div>
        <div className="item">
          <div className="item-icon">
            <i className="ri-coins-line"></i>
          </div>
          <p className="item-name">Top Up</p>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
