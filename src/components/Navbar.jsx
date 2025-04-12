import { useState } from "react";
import navItems from "../navItems.json";
import image from "../assets/image/svg/logo.svg";
import image3 from "../assets/image/svg/lupa.svg"; // Search Icon
import image5 from "../assets/image/svg/i.svg";
import { Link } from "react-router-dom"; // Link import edildi
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const {t} = useTranslation();

  return (
    <div className="navBar">
      <nav>
        <button className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`leftSide ${isMenuOpen ? "active" : ""}`}>
          {navItems.items.map((item) => (
            <li key={item.id} className="navLi">
              <Link to={item.link} className="navLink">
                {t(item.name)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="middleSide">
        <Link to="/">
          <img
            src={image}
            alt="logo"
            className="logo"
            style={{ width: "100px" }}
          />
        </Link>
      </div>
      <div className={`iconItem ${isMenuOpen ? "active" : ""}`}>
        <ul className="rightSide">
          {navItems.itemsOne.map((item) => (
            <li key={item.id} className="navLi">
              <Link to={item.link} className="navLink">
                {t(item.name)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="icons">
          {/* Search simgesine tıklandığında /search sayfasına yönlendirme */}
          <Link to="/search">
            <img src={image3} alt="search" style={{ width: "25px" }} />
          </Link>
          <img src={image5} alt="info" style={{ width: "25px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
