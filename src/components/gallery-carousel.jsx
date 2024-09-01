import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { beforeAfterImages } from "../data/index.astro";

const SwiperComponent = () => {
  return (
    <div className="swiper-container relative h-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={2.5}
        slidesPerGroup={1}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: "#swiper-button-prev-gallery",
          nextEl: "#swiper-button-next-gallery",
        }}
        pagination={{ clickable: true, el: "#swiper-pagination-gallery" }}
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
        {beforeAfterImages.map((image) => (
          <SwiperSlide className="h-full" key={image}>
            <img src={image} className="rounded-[2rem] object-cover h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="swiper-button-prev-gallery" className="swiper-button-prev" />
      <div id="swiper-button-next-gallery" className="swiper-button-next" />
      <div className="absolute -bottom-16 left-0 w-full">
        <div id="swiper-pagination-gallery" className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SwiperComponent;
