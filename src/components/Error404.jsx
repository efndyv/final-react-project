import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Error404 = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="errorDiv">
        <h2>{t("error404.title")}</h2>
        <p>{t("error404.message")}</p>
        <Link to={"/arrivals"}>
          <button>{t("error404.shopMen")}</button>
        </Link>
        <Link to={"/arrivals"}>
          <button>{t("error404.shopWomen")}</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
