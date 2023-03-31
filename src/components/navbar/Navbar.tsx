import { useEffect, useRef, useState } from "react";
import NotificationIcon from "../notification-icon/NotificationIcon";
import SearchBox from "../search-box/SearchBox";

import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<any>(null);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      console.log(navRef?.current?.offsetTop);
      setScrolled(window.scrollY > 24);
    });

    return () => {};
  }, []);

  return (
    <nav
      id="navbar"
      className={`navbar ${scrolled ? "active" : ""}`}
      ref={navRef}
    >
      <div className="flex align-center justify-between">
        <SearchBox />
        <div className="notification-icons">
          <NotificationIcon value="1" icon="ri-lg ri-shopping-bag-line" />
          <NotificationIcon value="9+" icon="ri-lg ri-chat-2-line" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
