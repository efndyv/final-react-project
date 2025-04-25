import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

import image27 from "../assets/image/flag/ae.svg";
import image28 from "../assets/image/flag/au.svg";
import image29 from "../assets/image/flag/be.svg";
import image30 from "../assets/image/flag/ca.svg";
import image31 from "../assets/image/flag/cn.svg";
import image32 from "../assets/image/flag/eu.svg";
import image33 from "../assets/image/flag/gb.svg";
import image34 from "../assets/image/flag/ie.svg";
import image35 from "../assets/image/flag/jp.svg";
import image36 from "../assets/image/flag/kr.svg";
import image37 from "../assets/image/flag/lu.svg";
import image38 from "../assets/image/flag/nl.svg";
import image39 from "../assets/image/flag/nz.svg";
import image40 from "../assets/image/flag/us.svg";

const flagSelect = [
  { id: 38, name: "United Arab Emirates", flag: image27, lang: "ar" },
  { id: 39, name: "Australia", flag: image28, lang: "en" },
  { id: 40, name: "Belgium", flag: image29, lang: "nl" },
  { id: 41, name: "Canada", flag: image30, lang: "en" },
  { id: 42, name: "China", flag: image31, lang: "zh" },
  { id: 43, name: "Europe", flag: image32, lang: "en" },
  { id: 44, name: "United Kingdom", flag: image33, lang: "en" },
  { id: 45, name: "Ireland", flag: image34, lang: "en" },
  { id: 46, name: "Japan", flag: image35, lang: "ja" },
  { id: 47, name: "South Korea", flag: image36, lang: "ko" },
  { id: 48, name: "Luxembourg", flag: image37, lang: "fr" },
  { id: 49, name: "Netherlands", flag: image38, lang: "nl" },
  { id: 50, name: "New Zealand", flag: image39, lang: "en" },
  { id: 51, name: "United States", flag: image40, lang: "en" },
];

export default function Footer({ pathname }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t, i18n } = useTranslation();

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer">
      {pathname !== "/" && !isSubmitted && (
        <div className="btnBot">
          <p>{t("footer.emailSignup")}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="footerBtn"
              value={email}
              onChange={handleInputChange}
              required
              placeholder={t("footer.emailPlaceholder")}
            />
            <button type="submit">{t("footer.signUp")}</button>
          </form>
        </div>
      )}

      {isSubmitted && (
        <div className="successMessage">
          <p>{t("footer.successMessage")}</p>
        </div>
      )}

      <div className="footer-container">
  
        <div className="footer-column">
          <h4>{t("footer.help")}</h4>
          <ul>
            <li>
              <Link to="/chat">{t("footer.chatWithUs")}</Link>
            </li>
            <li>
              <a href="tel:18889638944">{t("footer.phoneNumber")}</a>
            </li>
            <li>
              <a href="mailto:help@allbirds.com">{t("footer.email")}</a>
            </li>
            <li>
              <a href="sms:+1234567890">{t("footer.textNumber")}</a>
            </li>
            <li>
              <Link to="/returns">{t("footer.returns")}</Link>
            </li>
            <li>
              <Link to="/faq">{t("footer.faq")}</Link>
            </li>
            <li>
              <Link to="/afterpay">{t("footer.afterpay")}</Link>
            </li>
          </ul>
        </div>

      
        <div className="footer-column">
          <h4>{t("footer.shop")}</h4>
          <ul>
            <li>
              <Link to="/men">{t("footer.mensShoes")}</Link>
            </li>
            <li>
              <Link to="/women">{t("footer.womensShoes")}</Link>
            </li>
            <li>
              <Link to="/men/apparel">{t("footer.mensApparel")}</Link>
            </li>
            <li>
              <Link to="/women/apparel">{t("footer.womensApparel")}</Link>
            </li>
            <li>
              <Link to="/socks">{t("footer.socks")}</Link>
            </li>
            <li>
              <Link to="/gift-cards">{t("footer.giftCards")}</Link>
            </li>
            <li>
              <Link to="/refer-a-friend">{t("footer.referFriend")}</Link>
            </li>
          </ul>
        </div>

     
        <div className="footer-column">
          <h4>{t("footer.company")}</h4>
          <ul>
            <li>
              <Link to="/stores">{t("footer.ourStores")}</Link>
            </li>
            <li>
              <Link to="/our-story">{t("footer.ourStory")}</Link>
            </li>
            <li>
              <Link to="/sustainability">{t("footer.sustainability")}</Link>
            </li>
            <li>
              <Link to="/materials">{t("footer.ourMaterials")}</Link>
            </li>
            <li>
              <Link to="/investors">{t("footer.investors")}</Link>
            </li>
            <li>
              <Link to="/shoe-care">{t("footer.shoeCare")}</Link>
            </li>
            <li>
              <Link to="/affiliates">{t("footer.affiliates")}</Link>
            </li>
            <li>
              <Link to="/bulk-orders">{t("footer.bulkOrders")}</Link>
            </li>
            <li>
              <Link to="/careers">{t("footer.careers")}</Link>
            </li>
            <li>
              <Link to="/press">{t("footer.press")}</Link>
            </li>
            <li>
              <Link to="/responsible-disclosure">
                {t("footer.responsibleDisclosure")}
              </Link>
            </li>
            <li>
              <Link to="/transparency-act">{t("footer.transparencyAct")}</Link>
            </li>
            <li>
              <Link to="/community-offers">{t("footer.communityOffers")}</Link>
            </li>
            <li>
              <Link to="/blog">{t("footer.blog")}</Link>
            </li>
            <li>
              <Link to="/patents">{t("footer.patents")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flagSection">
        <div className="leftFlag">
          <p>{t("footer.follow")}</p>
          <span>{t("footer.followText")}</span>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterestP />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="flagRow">
          {flagSelect.map((item) => (
            <div
              className="rightFlag"
              key={item.id}
              onClick={() => changeLanguage(item.lang)}
              style={{ cursor: "pointer" }}
              title={item.name}
            >
              <img
                src={item.flag}
                alt={item.name}
                style={{
                  opacity: i18n.language === item.lang ? 1 : 0.7,
                  filter:
                    i18n.language === item.lang ? "none" : "grayscale(20%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <h5 className="copyReserv">
        {t("footer.copyright", { year: new Date().getFullYear() })}{" "}
        <Link to="/">{t("footer.terms")}</Link>,{" "}
        <Link to="/">{t("footer.privacy")}</Link> &{" "}
        <Link to="/">{t("footer.accessibility")}</Link>
      </h5>
    </footer>
  );
}