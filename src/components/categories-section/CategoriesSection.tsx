import "./categories-section.css";

const CategoriesSection = ({ m }: { m: any }) => {
  return (
    <m.section
      initial={{ opacity: 0, y: "-50px" }}
      animate={{ opacity: 1, y: "0px" }}
      exit={{ opacity: 0, y: "-50px" }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
      className="categories-section  px-2"
    >
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
    </m.section>
  );
};

export default CategoriesSection;
