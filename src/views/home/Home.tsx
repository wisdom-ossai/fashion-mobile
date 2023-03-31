import BestSaleSection from "../../components/best-sale-section/BestSaleSection";
import CategoriesSection from "../../components/categories-section/CategoriesSection";
import Navbar from "../../components/navbar/Navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <Navbar />

        <div className="hero_content px-2" style={{ paddingTop: "5.5rem" }}>
          <div style={{ maxWidth: 150 }}>
            <h3 className="intro" style={{ fontSize: ".75rem" }}>
              #FASHION DAY
            </h3>
            <h1 className="main-title">80% OFF</h1>
            <p className="description">
              Discover fashion that suites to your style.
            </p>
            <button className="py-2 btn-sm mt-2 dark-btn">
              Check this out
            </button>
          </div>
        </div>
      </div>
      <main className="home__main pt-4">
        <CategoriesSection />
        <BestSaleSection />
      </main>
    </div>
  );
};

export default Home;
