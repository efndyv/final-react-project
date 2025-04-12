import React from "react";
import Navbar from "./Navbar";
import Bottombar from "./Bottombar";
import { useTranslation } from "react-i18next";

const Header = () => {
  const {t}=useTranslation();
  return (
    
    <div className="bar">
      <div className="topNavigationBanner">
        <p>{t("header.title")}</p>
      </div>

      <Navbar />
      <Bottombar />
     
    </div>
  );
};

export default Header;
