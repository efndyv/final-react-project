import React from "react";
import image from "../../assets/image/svg/logo.svg";
import { useTranslation } from "react-i18next";

const Module = () => {
  const { t } = useTranslation();

  return (
    <div className="modulePage">
      <img src="../../src/assets/image/module.avif" alt="module visual" />
      <div className="absoPage">
        <h2>{t("absoPage.title")}</h2>
        <p>{t("absoPage.description")}</p>
        <img src={image} className="imageModule" alt="brand logo" />
        <span>BY NATURE</span>
      </div>
    </div>
  );
};

export default Module;
