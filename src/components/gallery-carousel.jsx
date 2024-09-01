import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const SwiperComponent = ({ images, prefix, loop = true }) => {
  return (
    <div className="swiper-container relative h-full w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2.5}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={loop}
        navigation={{
          prevEl: `#swiper-button-prev-${prefix}`,
          nextEl: `#swiper-button-next-${prefix}`,
        }}
        pagination={{ clickable: true, el: `#swiper-pagination-${prefix}` }}
        className="h-full select-none px-5 overflow-hidden"
        speed={500}
        breakpoints={{
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
          1: {
            slidesPerView: 1.25,
            spaceBetween: 30,
          },
        }}
      >
        {images.map((image) => (
          <SwiperSlide className="h-full" key={image}>
            <img
              src={image}
              className="rounded-[2rem] object-cover h-full w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id={`swiper-button-prev-${prefix}`} className="swiper-button-prev" />
      <div id={`swiper-button-next-${prefix}`} className="swiper-button-next" />
      <div className="absolute -bottom-16 left-0 w-full">
        <div
          id={`swiper-pagination-${prefix}`}
          className="swiper-pagination"
        ></div>
      </div>
    </div>
  );
};

export default SwiperComponent;
