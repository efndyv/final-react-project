import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Approach = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2 className="appRoach">{t("approach.title")}</h2>
      <div className="allApproach">
        <div className="firstApp">
          <p>{t("approach.firstApp.title")}</p>
          <span>
            {t("approach.firstApp.description")}
            <br />
            <Link to="/">{t("approach.learnMore")}</Link>
          </span>
        </div>
        <div className="secApp">
          <p>{t("approach.secApp.title")}</p>
          <span>
            {t("approach.secApp.description")}
            <br />
            <Link to="/">{t("approach.learnMore")}</Link>
          </span>
        </div>
        <div className="threeApp">
          <p>{t("approach.threeApp.title")}</p>
          <span>
            {t("approach.threeApp.description")}
            <br />
            <Link to="/">{t("approach.learnMore")}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Approach;
