


import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FirstDibs = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (!email.trim()) {
      setError(t("firstDibs.validationError"));
    } else {
      setError("");

    }
  };

  return (
    <div className="firstDib">
      <h2>{t("firstDibs.title")}</h2>
      <p>{t("firstDibs.description")}</p>
      <div className="signBtn">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("firstDibs.emailPlaceholder")}
          className="customInput"
        />
        <button onClick={handleSignUp}>{t("firstDibs.signUpBtn")}</button>
      </div>
      {error && <p style={{ color: "red", marginTop: "8px" }}>{error}</p>}
      <span>
        {t("firstDibs.note")} <Link to="/">{t("firstDibs.privacyPolicy")}</Link>{" "}
        {t("firstDibs.and")} <Link to="/">{t("firstDibs.terms")}</Link>
      </span>
    </div>
  );
};

export default FirstDibs;
