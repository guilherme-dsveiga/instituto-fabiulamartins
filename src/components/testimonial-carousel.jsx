import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { testimonials } from "../data/index.astro";

const SwiperComponentTestimonials = () => {
  return (
    <div className="swiper-container relative h-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: "#swiper-prev-testimonial",
          nextEl: "#swiper-next-testimonial",
        }}
        pagination={{ clickable: true, el: "#swiper-pagination-testimonial" }}
        className="h-full select-none px-5 overflow-hidden"
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map(({ quote, author }) => (
          <SwiperSlide
            className="h-full bg-transparent lg:p-16 p-6"
            key={quote}
          >
            <h3 className="w-full lg:max-w-5xl text-balance lg:text-3xl text-2xl lg:text-[32px] lg:leading-10 leading-8 font-merriweather text-white">
              {quote}
            </h3>
            <p className="text-pretty text-2xl text-white font-mulish mt-8">
              {author}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="swiper-prev-testimonial" className="swiper-button-prev" />
      <div id="swiper-next-testimonial" className="swiper-button-next" />
      <div className="absolute bottom-6 left-20 w-full ">
        <div
          id="swiper-pagination-testimonial"
          className="swiper-pagination text-left flex gap-4"
        ></div>
      </div>
    </div>
  );
};

export default SwiperComponentTestimonials;
