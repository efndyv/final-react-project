
import React, { useState } from "react";
import image from "../../assets/image/banner.avif";
import ProductSection from "../../components/ProductsSection";
import Faq from "../../components/Faq";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewArrivals = () => {
  const [filter, setFilter] = useState("all"); // 'all', 'men', or 'women'
  const { t } = useTranslation();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <section>
      <div className="banner">
        <img src={image} width={"100%"} alt="Banner" />
        <div className="bannerText">
          <p>{t("arrivals.header")}</p>
          <span>
            {t("arrivals.bannerLine1")}
            <br />
            {t("arrivals.bannerLine2")}
            <br />
            {t("arrivals.bannerLine3")}
          </span>
        </div>
      </div>
      <div className="topArrivals">
        <h4
          onClick={() => handleFilterChange("men")}
          style={{
            cursor: "pointer",
            color: filter === "men" ? "black" : "gray",
          }}
        >
          {t("arrivals.filterMen")}
        </h4>
        <h4
          onClick={() => handleFilterChange("all")}
          style={{
            cursor: "pointer",
            color: filter === "all" ? "black" : "gray",
          }}
        >
          {t("arrivals.filterAll")}
        </h4>
        <h4
          onClick={() => handleFilterChange("women")}
          style={{
            cursor: "pointer",
            color: filter === "women" ? "black" : "gray",
          }}
        >
          {t("arrivals.filterWomen")}
        </h4>
      </div>
      <div className="arrivalsCenter">
        <h3>{t("arrivals.shoesTitle")}</h3>
        <span>
          {t("arrivals.shoesLine1")}
          <br />
          {t("arrivals.shoesLine2")}
        </span>
        <ProductSection filter={filter} />
        <p>{t("arrivals.menTitle")}</p>
        <span className="topMen">
          {t("arrivals.menText1")}
          <Link to="/men">{t("arrivals.menLink")}</Link>
          {t("arrivals.menText2")}
          <br />
          {t("arrivals.menText3")}
        </span>
        <br />
        <span className="botMen">
          {t("arrivals.menText4")}
          <br />
          {t("arrivals.menText5")}
          <br />
          {t("arrivals.menText6")}
        </span>
      </div>
      <Faq />
    </section>
  );
};

export default NewArrivals;
