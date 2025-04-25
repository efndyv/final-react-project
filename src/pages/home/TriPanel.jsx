import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay} from "swiper/modules";

import image3 from "../../assets/image/tricart/brown2.avif";
import image4 from "../../assets/image/tricart/white.avif";
import image5 from "../../assets/image/tricart/white2.avif";
import { useTranslation } from "react-i18next";

const TriPanel = () => {
  const { t } = useTranslation();
  const panelItems = t("tripanel", { returnObjects: true });

  const triPanel = [
    {
      id: 14,
      buttonTitle1: panelItems[0].buttonTitle1,
      buttonTitle2: panelItems[0].buttonTitle2,
      name: "Tree Dasher 2",
      link: "/arrivals",
      link2: "/arrivals",
      title: panelItems[0].title,
      img: image3,
    },
    {
      id: 15,
      buttonTitle1: panelItems[1].buttonTitle1,
      buttonTitle2: panelItems[1].buttonTitle2,
      name: "Tree Runner Go",
      link: "/arrivals",
      link2: "/arrivals",
      title: panelItems[1].title,
      img: image4,
    },
    {
      id: 16,
      buttonTitle1: panelItems[2].buttonTitle1,
      buttonTitle2: panelItems[2].buttonTitle2,
      name: "Tree Glider",
      link: "/arrivals",
      link2: "/arrivals",
      title: panelItems[2].title,
      img: image5,
    },
  ];

  const [isResponsive, setIsResponsive] = useState(window.innerWidth < 990);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 990);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isResponsive) {
    return (
      <div className="mobile-tri-panel">
        <Swiper
          slidesPerView={1.06}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="panelSwiper"
          breakpoints={{
            400: {
              slidesPerView: 1.5,
            },
            500: {
              slidesPerView: 2,
            },
          }}
        >
          {triPanel.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mobile-card">
                <div className="mobile-imgBox">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="mobile-text">
                  <p>{item.name}</p>
                  <span>{t(item.title)}</span>
                </div>
                <div className="mobile-btn">
                  <Link to={item.link} className="mobile-link">
                    {t(item.buttonTitle1)}
                  </Link>
                  <Link to={item.link2} className="mobile-link">
                    {t(item.buttonTitle2)}
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  
  return (
    <div className="panelItem">
      {triPanel.map((item) => (
        <div key={item.id} className="card">
          <div className="text">
            <p>{item.name}</p>
            <span>{t(item.title)}</span>
          </div>
          <div className="imgBox">
            <img src={item.img} alt={item.name} style={{ width: "100%" }} />
          </div>
          <div className="btn">
            <Link to={item.link} className="link" style={{ fontSize: "12px" }}>
              {t(item.buttonTitle1)}
            </Link>
            <Link to={item.link2} className="link" style={{ fontSize: "12px" }}>
              {t(item.buttonTitle2)}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TriPanel;
