import { useState } from "react";
import { useApp } from "../AppProvider";
import NotificationIcon from "../notification-icon/NotificationIcon";
import SearchBox from "../search-box/SearchBox";

import "./navbar.css";

const Navbar = () => {
  const { scrolled } = useApp();
  return (
    <nav className={`navbar ${scrolled ? "active" : ""}`}>
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
