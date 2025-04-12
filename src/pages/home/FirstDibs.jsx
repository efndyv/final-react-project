import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 

const FirstDibs = () => {
  const { t } = useTranslation(); 

  return (
    <div className="firstDib">
      <h2>{t("firstDibs.title")}</h2>
      <p>{t("firstDibs.description")}</p>
      <div className="signBtn">
        <input
          type="text"
          placeholder={t("firstDibs.emailPlaceholder")}
          className="customInput"
        />
        <button>{t("firstDibs.signUpBtn")}</button>
      </div>
      <span>
        {t("firstDibs.note")} <Link to="/">{t("firstDibs.privacyPolicy")}</Link>{" "}
        {t("firstDibs.and")} <Link to="/">{t("firstDibs.terms")}</Link>
      </span>
    </div>
  );
};

export default FirstDibs;
