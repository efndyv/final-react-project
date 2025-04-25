import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import image6 from "../../assets/image/filteredslider/activemen.avif";
import image7 from "../../assets/image/filteredslider/activewomen.avif";
import image8 from "../../assets/image/filteredslider/carouselmens.avif";
import image9 from "../../assets/image/filteredslider/carouselwomens.avif";
import image10 from "../../assets/image/filteredslider/shoppablefeature.avif";
import image11 from "../../assets/image/filteredslider/waterrepellent.avif";
import { useTranslation } from "react-i18next";

export default function FilteredSlider() {
  const { t } = useTranslation();
  const [activeBtn, setActiveBtn] = useState(1);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const activeBtnData = [
    { title: t("filteredSlider.activeBtn.onTheMove"), id: 1 },
    { title: t("filteredSlider.activeBtn.everydayWear"), id: 2 },
    { title: t("filteredSlider.activeBtn.weatherReady"), id: 3 },
  ];

  const filteredProducts = [
    {
      id: 17,
      link: "/arrivals",
      title: t("filteredSlider.products.mensActive"),
      img: image6,
    },
    {
      id: 18,
      link: "/arrivals",
      title: t("filteredSlider.products.womensActive"),
      img: image7,
    },
    {
      id: 19,
      link: "/arrivals",
      title: t("filteredSlider.products.mensSeason"),
      img: image8,
    },
    {
      id: 20,
      link: "/arrivals",
      title: t("filteredSlider.products.womensSeason"),
      img: image9,
    },
    {
      id: 21,
      link: "/arrivals",
      title: t("filteredSlider.products.mensWeather"),
      img: image10,
    },
    {
      id: 22,
      link: "/arrivals",
      title: t("filteredSlider.products.womensWeather"),
      img: image11,
    },
  ];

  const handleActiveBtn = (id) => {
    setActiveBtn(id);

    let slideIndex = 0;
    if (id === 1) slideIndex = 0;
    else if (id === 2) slideIndex = 2;
    else if (id === 3) slideIndex = 4;

    if (swiperInstance) {
      swiperInstance.slideTo(slideIndex);
    }
  };

  return (
    <div className="sliderFilter">
      <div className="activeBtn">
        {activeBtnData.map((item) => (
          <span
            key={item.id}
            onClick={() => handleActiveBtn(item.id)}
            className={`${item.id === activeBtn ? "active" : "disabled"}`}
          >
            {item.title}
          </span>
        ))}
      </div>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        centeredSlides={false}
        spaceBetween={10}
        grabCursor={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        breakpoints={{
          400: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },

        
        }}
      >
        {filteredProducts.map((item) => (
          <SwiperSlide key={item.id} className="customSlideItem">
            <Link to={item.link} className="linkFilter">
              <div className="filteredItem">
                <img src={item.img} className="filteredImage" />
                <p>{item.title}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
