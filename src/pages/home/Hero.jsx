import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../../assets/image/swiper/blue.avif";
import image2 from "../../assets/image/swiper/brown.avif";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const heroItems = t("hero", { returnObjects: true });
  const sliderItems = [
    {
      id: 12,
      name1: heroItems[0].name1,
      link: "/arrivals",
      name2: heroItems[0].name2,
      link2: "/arrivals",
      img: image2,
      title: heroItems[0].title,
      title2: heroItems[0].title2,
      title3: heroItems[0].title3,
      title4: heroItems[0].title4,
      order: 1,
    },
    {
      id: 13,
      link: "/arrivals",
      link2: "/arrivals",
      name1: heroItems[1].name1,
      name2: heroItems[1].name2,
      img: image1,
      title2: heroItems[1].title2,
      title5: heroItems[1].title5,
      order: 2,
    },
  ];

  return (
    <>
      <div className="heroItem">
        <Swiper
          direction={"vertical"}
          allowTouchMove={false}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {sliderItems.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.img} />
              <div className="title">
                <h1>{t(item.title)}</h1>
                {item.order !== 2 && <div className="border"></div>}{" "}
                <div className="titleAll">
                  <div className="titleUp">
                    <span>{t(item.title3)}</span>
                    <span>{t(item.title4)}</span>
                  </div>
                </div>
                <h2 className={item.order == "2" ? "one-line" : "two-line"}>
                  {t(item.title2)}
                </h2>
              </div>
              <h5 className="noteItem">{t(item.title5)}</h5>
              <div className="btn">
                <Link to={item.link} className="link">
                  {t(item.name1)}
                </Link>
                <Link to={item.link2} className="link">
                  {t(item.name2)}
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
