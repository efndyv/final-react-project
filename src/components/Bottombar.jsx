import React from "react";
import navItems from "../navItems.json";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Bottombar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ul className="bottomBar">
        {navItems.itemsTwo.map((item) => (
          <li key={item.id} className="navLi">
            <Link to={item.link} className="navLink">
              {t(item.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bottombar;
