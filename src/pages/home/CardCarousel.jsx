import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import image19 from "../../assets/image/cardcarousel/Hanami_Night_Natural_White_1.avif";
import image20 from "../../assets/image/cardcarousel/Lounger_Lift_Natural_White_Hanami_Night_Twilight_White.avif";
import image21 from "../../assets/image/cardcarousel/MENS_TREE_RUNNER_NAVY_NIGHT_DARK_NAVY.avif";
import image22 from "../../assets/image/cardcarousel/Trail_Runner_SWT_Blizzard_Hanami_Night_Blizzard.avif";
import image23 from "../../assets/image/cardcarousel/Trail_Runner_SWT_Blizzard_Hanami.avif";
import image24 from "../../assets/image/cardcarousel/Tree_Dasher_2_Blizzard_Hanami_Night_Natural_White.avif";
import image25 from "../../assets/image/cardcarousel/Tree_Lounger_Hanami_Night_Natural_White.avif";
import image26 from "../../assets/image/cardcarousel/WOMENS_TREE_BREEZER_JET_BLACK_BLACK.avif";

export default function CarouselCard() {
  const { t, i18n } = useTranslation();
  const [swiperKey, setSwiperKey] = useState(0);

  const formatPrice = (price) => {
    let currency, locale;
    switch (i18n.language) {
      case "ko":
        currency = "KRW";
        locale = "ko-KR";
        break;
      case "nl":
        currency = "EUR";
        locale = "nl-NL";
        break;
      default:
        currency = "USD";
        locale = "en-US";
    }
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(price);
  };

  const carouselProduct = [
    {
      id: 30,
      link: "/arrivals",
      title: t("carousel.products.30.title"),
      name: t("carousel.products.30.name"),
      price: 120,
      img: image19,
    },
    {
      id: 31,
      link: "/arrivals",
      title: t("carousel.products.31.title"),
      name: t("carousel.products.31.name"),
      price: 135,
      img: image20,
    },
    {
      id: 32,
      link: "/arrivals",
      title: t("carousel.products.32.title"),
      name: t("carousel.products.32.name"),
      price: 100,
      img: image21,
    },
    {
      id: 33,
      link: "/arrivals",
      title: t("carousel.products.33.title"),
      name: t("carousel.products.33.name"),
      price: 105,
      img: image22,
    },
    {
      id: 34,
      link: "/arrivals",
      title: t("carousel.products.34.title"),
      name: t("carousel.products.34.name"),
      price: 140,
      img: image23,
    },
    {
      id: 35,
      link: "/arrivals",
      title: t("carousel.products.35.title"),
      name: t("carousel.products.35.name"),
      price: 98,
      img: image24,
    },
    {
      id: 36,
      link: "/arrivals",
      title: t("carousel.products.36.title"),
      name: t("carousel.products.36.name"),
      price: 98,
      img: image25,
    },
    {
      id: 37,
      link: "/arrivals",
      title: t("carousel.products.37.title"),
      name: t("carousel.products.37.name"),
      price: 100,
      img: image26,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setSwiperKey((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="cardCarousel">
      <h2>{t("carousel.title")}</h2>
      <Swiper
        key={swiperKey}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={8}
        className="mySwiperItem"
        breakpoints={{
          399: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
      >
        {carouselProduct.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.link}>
              <div className="myImageMg">
                <img src={item.img} className="image" />
              </div>
              <div className="myTitle">
                <p>{item.title}</p>
                <h6>{item.name}</h6>
                <h5>{formatPrice(item.price)}</h5>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
