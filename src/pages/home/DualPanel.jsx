import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import image17 from "../../assets/image/doublepanel/DualPanel_black.avif";
import image18 from "../../assets/image/doublepanel/DualPanel_Mens.avif";

const DualPanel = () => {
  const { t } = useTranslation();

  const mainPanel = [
    {
      id: 28,
      buttonTitle3: t("dualPanel.explore"),
      name: t("dualPanel.moonshot.name"),
      link3: "/arrivals",
      title: t("dualPanel.moonshot.title"),
      img: image17,
    },
    {
      id: 29,
      buttonTitle1: t("dualPanel.treeStyles.shopMen"),
      buttonTitle2: t("dualPanel.treeStyles.shopWomen"),
      name: t("dualPanel.treeStyles.name"),
      link: "/arrivals",
      link2: "/arrivals",
      title: t("dualPanel.treeStyles.title"),
      img: image18,
    },
  ];

  return (
    <div className="mainPanel">
      {mainPanel.map((item) => (
        <div key={item.id} className="leftPanel">
          <div className="image">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="content">
            <div className="contentItem">
              <h3>{item.name}</h3>
              <h2>{item.title}</h2>
            </div>
            <div className="buttonGroup">
              {item.buttonTitle3 && (
                <Link to={item.link3} className="linkProduct">
                  {item.buttonTitle3}
                </Link>
              )}
              {item.buttonTitle1 && (
                <Link to={item.link} className="linkProduct">
                  {item.buttonTitle1}
                </Link>
              )}
              {item.buttonTitle2 && (
                <Link to={item.link2} className="linkProduct">
                  {item.buttonTitle2}
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DualPanel;
