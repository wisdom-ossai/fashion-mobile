import { useState } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../bottom-nav/BottomNav";
import Navbar from "../navbar/Navbar";

const Layout = () => {
  const [isMain, setIsMain] = useState(true);
  const [topNavBackground, setTopNavBackground] = useState("");
  return (
    <>
      <Navbar isMain={isMain} background={topNavBackground} />
      <Outlet context={{ setTopNavBackground, setIsMain }} />
    </>
  );
};

export default Layout;
