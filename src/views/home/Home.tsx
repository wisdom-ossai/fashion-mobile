import BestSaleSection from "../../components/best-sale-section/BestSaleSection";
import BottomNav from "../../components/bottom-nav/BottomNav";
import CategoriesSection from "../../components/categories-section/CategoriesSection";
import { motion as m } from "framer-motion";

// @ts-ignore
import Slider from "infinite-react-carousel";
import "./home.css";
import React from "react";

const Home = () => {
  React.useEffect(() => {
    typeof window !== "undefined" && window.scrollTo(0, 0);
  }, []);

  const settings = {
    autoplay: true,
    pauseOnHover: false,
    arrowsBlock: false,
    duration: 150,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <div className="home">
        <m.div
          initial={{ opacity: 0, y: "-50px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{ opacity: 0, y: "-50px" }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeIn" }}
        >
          <Slider {...settings}>
            <div className="home__hero-1">
              <div
                className="hero_content px-2"
                style={{ paddingTop: "5.5rem" }}
              >
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
            <div className="home__hero-2">
              <div
                className="hero_content px-2"
                style={{ paddingTop: "5.5rem" }}
              >
                <div style={{ maxWidth: 160 }}>
                  <h3 className="intro" style={{ fontSize: ".75rem" }}>
                    #FASHION DAY
                  </h3>
                  <h1
                    className="secondary-title"
                    style={{ fontSize: "1.15rem" }}
                  >
                    DISCOVER OUR
                    <br /> BEAUTY SECTION
                  </h1>
                  <button className="py-2 btn-sm mt-2 dark-btn">
                    Check this out
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </m.div>
        <main className="home__main pt-4">
          <CategoriesSection m={m} />
          <BestSaleSection />
        </main>
      </div>
      <BottomNav />
    </>
  );
};

export default Home;
