import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import image12 from "../../assets/image/bountiful/hanamiblue.avif";
import image13 from "../../assets/image/bountiful/Hanami_Blue_Blizzard.avif";
import image14 from "../../assets/image/bountiful/Hanami_Night_Blizzard.avif";
import image15 from "../../assets/image/bountiful/Hanami_Night_Natural_Gold.avif";
import image16 from "../../assets/image/bountiful/Hanami_Night_Natural_White.avif";

const NewBountiful = () => {
  const { t } = useTranslation();

  const leftItem = {
    id: 23,
    buttonTitle1: t("bountiful.shopMen"),
    buttonTitle2: t("bountiful.shopWomen"),
    name: t("bountiful.header"),
    link: "/arrivals",
    link2: "/arrivals",
    title: t("bountiful.subtitle"),
    img: image12,
  };

  const rightItems = [
    {
      id: 24,
      link: "/arrivals",
      title: t("bountiful.products.0.title"),
      img: image13,
      price: 135,
      name: t("bountiful.products.0.name"),
    },
    {
      id: 25,
      link: "/arrivals",
      title: t("bountiful.products.1.title"),
      img: image14,
      price: 120,
      name: t("bountiful.products.1.name"),
    },
    {
      id: 26,
      link: "/arrivals",
      title: t("bountiful.products.2.title"),
      img: image15,
      price: 120,
      name: t("bountiful.products.2.name"),
    },
    {
      id: 27,
      link: "/arrivals",
      title: t("bountiful.products.3.title"),
      img: image16,
      price: 135,
      name: t("bountiful.products.3.name"),
    },
  ];

  const formatPrice = (price) => {
    const { currencySymbol, currency } = t("bountiful", {
      returnObjects: true,
    });

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  return (
    <div className="newBountifulContainer">
      <div className="leftDiv">
        <div className="card">
          <div className="imgBox">
            <img src={leftItem.img} alt={leftItem.title} />
          </div>
          <div className="btnProduct">
            <div className="btnOne">
              <p>{leftItem.name}</p>
              <h5>{leftItem.title}</h5>
              <Link to={leftItem.link} className="linkSizeItem mr">
                {leftItem.buttonTitle1}
              </Link>
              <Link to={leftItem.link2} className="linkSizeItem">
                {leftItem.buttonTitle2}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rightDiv">
        {rightItems.map((item) => (
          <div key={item.id} className="card smallCard">
            <div className="imgBox">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="text">
              <div className="textItem">
                <p>{item.title}</p>
                <span>{item.name}</span>
              </div>
              <div className="priceItem">
                <span className="priceItem">{formatPrice(item.price)}</span>{" "}
              </div>
            </div>
            <div className="btnCenter">
              <Link
                to={leftItem.link}
                className="linkSizeItem"
                style={{ fontSize: "14px" }}
              >
                {leftItem.buttonTitle1}
              </Link>
              <Link
                to={leftItem.link2}
                className="linkSizeItem"
                style={{ fontSize: "14px" }}
              >
                {leftItem.buttonTitle2}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewBountiful;
