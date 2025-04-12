// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebookF,
//   FaInstagram,
//   FaTwitter,
//   FaPinterestP,
//   FaTiktok,
//   FaYoutube,
// } from "react-icons/fa";

// import image27 from "../assets/image/flag/ae.svg";
// import image28 from "../assets/image/flag/au.svg";
// import image29 from "../assets/image/flag/be.svg";
// import image30 from "../assets/image/flag/ca.svg";
// import image31 from "../assets/image/flag/cn.svg";
// import image32 from "../assets/image/flag/eu.svg";
// import image33 from "../assets/image/flag/gb.svg";
// import image34 from "../assets/image/flag/ie.svg";
// import image35 from "../assets/image/flag/jp.svg";
// import image36 from "../assets/image/flag/kr.svg";
// import image37 from "../assets/image/flag/lu.svg";
// import image38 from "../assets/image/flag/nl.svg";
// import image39 from "../assets/image/flag/nz.svg";
// import image40 from "../assets/image/flag/us.svg";

// // const flagSelect = [
// //   { id: 38, link: "/", name: "United Arab Emirates", flag: image27 },
// //   { id: 39, link: "/", name: "Australia", flag: image28 },
// //   { id: 40, link: "/", name: "Belgium", flag: image29 },
// //   { id: 41, link: "/", name: "Canada", flag: image30 },
// //   { id: 42, link: "/", name: "China", flag: image31 },
// //   { id: 43, link: "/", name: "Europe", flag: image32 },
// //   { id: 44, link: "/", name: "United Kingdom", flag: image33 },
// //   { id: 45, link: "/", name: "Ireland", flag: image34 },
// //   { id: 46, link: "/", name: "Japan", flag: image35 },
// //   { id: 47, link: "/", name: "South Korea", flag: image36 },
// //   { id: 48, link: "/", name: "Luxembourg", flag: image37 },
// //   { id: 49, link: "/", name: "Netherlands", flag: image38 },
// //   { id: 50, link: "/", name: "New Zealand", flag: image39 },
// //   { id: 51, link: "/", name: "United States", flag: image40 },
// // ];

// const flagSelect = [
//   {
//     id: 38,
//     link: "/",
//     name: "United Arab Emirates",
//     flag: image27,
//     lang: "ar",
//   },
//   { id: 39, link: "/", name: "Australia", flag: image28, lang: "en" },
//   { id: 40, link: "/", name: "Belgium", flag: image29, lang: "bl" }, 
//   { id: 41, link: "/", name: "Canada", flag: image30, lang: "en" },
//   { id: 42, link: "/", name: "China", flag: image31, lang: "zh" },
//   { id: 43, link: "/", name: "Europe", flag: image32, lang: "en" }, 
//   { id: 44, link: "/", name: "United Kingdom", flag: image33, lang: "en" },
//   { id: 45, link: "/", name: "Ireland", flag: image34, lang: "en" },
//   { id: 46, link: "/", name: "Japan", flag: image35, lang: "ja" },
//   { id: 47, link: "/", name: "South Korea", flag: image36, lang: "kr" },
//   { id: 48, link: "/", name: "Luxembourg", flag: image37, lang: "lx" }, 
//   { id: 49, link: "/", name: "Netherlands", flag: image38, lang: "nl" },
//   { id: 50, link: "/", name: "New Zealand", flag: image39, lang: "en" },
//   { id: 51, link: "/", name: "United States", flag: image40, lang: "en" },
// ];

// export default function Footer({ pathname }) {
//   const [email, setEmail] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (email.trim() !== "") {
//       setIsSubmitted(true); // Formu başarıyla gönderdi
//       setEmail(""); // Input'u temizle
//     }
//   };

//   return (
//     <footer className="footer">
//       {pathname !== "/" && !isSubmitted && (
//         <div className="btnBot">
//           <p>Enter your email to stay in touch!</p>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               className="footerBtn"
//               value={email}
//               onChange={handleInputChange}
//               required // Email alanının zorunlu olmasını sağla
//               placeholder="Enter your email"
//             />
//             <button type="submit">SIGN UP</button>
//           </form>
//         </div>
//       )}

//       {isSubmitted && (
//         <div className="successMessage">
//           <p>Great! You're all set! Cheers!</p>
//         </div>
//       )}

//       <div className="footer-container">
//         {/* Help Column */}
//         <div className="footer-column">
//           <h4>Help</h4>
//           <ul>
//             <li>
//               <Link to="/chat">Chat with us!</Link>
//             </li>
//             <li>
//               <a href="tel:18889638944">1-888-963-8944</a>
//             </li>
//             <li>
//               <a href="mailto:help@allbirds.com">help@allbirds.com</a>
//             </li>
//             <li>
//               <a href="sms:+1234567890">1-814-251-9966 (Text)</a>
//             </li>
//             <li>
//               <Link to="/returns">Returns/Exchanges</Link>
//             </li>
//             <li>
//               <Link to="/faq">FAQ/Contact Us</Link>
//             </li>
//             <li>
//               <Link to="/afterpay">Afterpay</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Shop Column */}
//         <div className="footer-column">
//           <h4>Shop</h4>
//           <ul>
//             <li>
//               <Link to="/men">Men's Shoes</Link>
//             </li>
//             <li>
//               <Link to="/women">Women's Shoes</Link>
//             </li>
//             <li>
//               <Link to="/men/apparel">Men's Apparel</Link>
//             </li>
//             <li>
//               <Link to="/women/apparel">Women's Apparel</Link>
//             </li>
//             <li>
//               <Link to="/socks">Socks</Link>
//             </li>
//             <li>
//               <Link to="/gift-cards">Gift Cards</Link>
//             </li>
//             <li>
//               <Link to="/refer-a-friend">Refer a Friend</Link>
//             </li>
//           </ul>
//         </div>

//         {/* Company Column */}
//         <div className="footer-column">
//           <h4>Company</h4>
//           <ul>
//             <li>
//               <Link to="/stores">Our Stores</Link>
//             </li>
//             <li>
//               <Link to="/our-story">Our Story</Link>
//             </li>
//             <li>
//               <Link to="/sustainability">Sustainability</Link>
//             </li>
//             <li>
//               <Link to="/materials">Our Materials</Link>
//             </li>
//             <li>
//               <Link to="/investors">Investors</Link>
//             </li>
//             <li>
//               <Link to="/shoe-care">Shoe Care</Link>
//             </li>
//             <li>
//               <Link to="/affiliates">Affiliates</Link>
//             </li>
//             <li>
//               <Link to="/bulk-orders">Bulk Orders</Link>
//             </li>
//             <li>
//               <Link to="/careers">Careers</Link>
//             </li>
//             <li>
//               <Link to="/press">Press</Link>
//             </li>
//             <li>
//               <Link to="/responsible-disclosure">
//                 Allbirds Responsible Disclosure Program
//               </Link>
//             </li>
//             <li>
//               <Link to="/transparency-act">California Transparency Act</Link>
//             </li>
//             <li>
//               <Link to="/community-offers">Community Offers</Link>
//             </li>
//             <li>
//               <Link to="/blog">Our Blog</Link>
//             </li>
//             <li>
//               <Link to="/patents">Patents</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="flagSection">
//         <div className="leftFlag">
//           <p>Follow the Flock</p>
//           <span>
//             Exclusive offers, a heads up on new things, and <br />
//             sightings of Allbirds in the wild. Oh, we have cute <br /> sheep,
//             too. #allbirds
//           </span>
//           <div className="social-icons">
//             <a
//               href="https://www.facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Facebook"
//             >
//               <FaFacebookF />
//             </a>
//             <a
//               href="https://www.instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Instagram"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="X"
//             >
//               <FaTwitter />
//             </a>
//             <a
//               href="https://www.pinterest.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="Pinterest"
//             >
//               <FaPinterestP />
//             </a>
//             <a
//               href="https://www.tiktok.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="TikTok"
//             >
//               <FaTiktok />
//             </a>
//             <a
//               href="https://www.youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="YouTube"
//             >
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//         <div className="flagRow">
//           {flagSelect.map((item) => (
//             <div className="rightFlag" key={item.id}>
//               <Link to="/">
//                 <img src={item.flag} alt={item.name} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//       <h5 className="copyReserv">
//         © 2025 Allbirds, Inc. All Rights Reserved. <Link to="/">Terms</Link> ,
//         <Link to="/">Privacy</Link> &<Link to="/">Accessibility</Link>
//       </h5>
//     </footer>
//   );
// }


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
        {/* Help Column */}
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

        {/* Shop Column */}
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

        {/* Company Column */}
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