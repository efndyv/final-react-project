import React from "react";
import image from "../../assets/image/greenmen.avif";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Approach from "../home/Approach";

const ReRun = () => {
  const { t } = useTranslation();

  return (
    <section className="reRunSec">
      <div className="reRun">
        <div className="leftRun">
          <img src={image} alt="Allbirds ReRun" />
        </div>
        <div className="rightRun">
          <h2>{t("reRun.title")}</h2>
          <h2>{t("reRun.subtitle")}</h2>
          <p>{t("reRun.description1")}</p>
          <p>{t("reRun.description2")}</p>
          <p>{t("reRun.description3")}</p>
          <span>{t("reRun.disclaimer")}</span>
          <Link to={"/"}>{t("reRun.button")}</Link>
        </div>
      </div>
      <Approach />
    </section>
  );
};

export default ReRun;
