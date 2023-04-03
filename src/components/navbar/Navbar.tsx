import { ReactNode, useEffect, useRef, useState } from "react";
import NotificationIcon from "../notification-icon/NotificationIcon";
import SearchBox from "../search-box/SearchBox";
import BackButton from "./BackButton";

import "./navbar.css";

const Navbar = ({
  isMain,
  style,
  background,
}: {
  isMain?: boolean;
  style?: any;
  background?: string;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      setScrolled(window.scrollY > 24);
    });
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar ${scrolled ? "active" : ""}`}
      ref={navRef}
      style={{ ...style, background }}
    >
      <div className="flex align-center justify-between">
        {isMain ? <SearchBox /> : <BackButton />}
        <div
          className="notification-icons"
          style={{ gridTemplateColumns: !isMain ? "repeat(3, auto)" : "" }}
        >
          {isMain ? (
            <>
              <NotificationIcon value="1" icon="ri-lg ri-shopping-bag-line" />
              <NotificationIcon value="9+" icon="ri-lg ri-chat-2-line" />
            </>
          ) : (
            <>
              <button className="btn-text-primary text-dark">
                <i className="ri-heart-fill"></i>
              </button>
              <button className="btn-text-primary text-dark">
                <i className="ri-share-line"></i>
              </button>

              <NotificationIcon value="1" icon="ri-lg ri-shopping-bag-line" />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
