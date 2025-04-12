import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

const ProductCard = ({ data }) => {
  return (
    <div className="swiperProduct">
      <img src={data.img} alt="" />
      <h2>{data.title}</h2>
      <h3>{data.price}</h3>
      <div className="">
        <Swiper
          cssMode={true}
          navigation={true}
          mousewheel={true}
          keyboard={true}
          slidesPerView={5}
          slidesPerGroup={4}
          modules={[Navigation, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {data.sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={item.link} key={item.id}>
                <div className="myImageMg">
                  <img src={item.img} className="image" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    
    </div>
  );
};

export default ProductCard;
