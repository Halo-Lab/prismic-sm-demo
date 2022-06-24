import React, { useRef } from "react";

import s from "./Testimonials.module.scss";
import TestimonialsItem from "./TestimonialsItem/TestimonialsItem";
import classnames from "classnames";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
SwiperCore.use([Navigation]);

import SecondArrowIcon from "../../../../assets/SecondArrowIcon/SecondArrowIcon";

const Testimonials = ({ testimonials }) => {
  const swiperRef = useRef(null);

  const sliderParams = {
    spaceBetween: 16,
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        loop: true,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1280: {
        centeredSlides: false,
        loop: true,
        spaceBetween: 40,
      },
    },
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const { category, testimonialsArr, title } = testimonials;

  const testimonialItems = testimonialsArr.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <TestimonialsItem data={item} />
      </SwiperSlide>
    );
  });

  return (
    <div className="section">
      <div className={s.testimonial}>
        <div className={s.testimonialWrapper}>
          <div className={s.testimonialInfo}>
            <span className="section-category section-category--inner section-title--center-mobile">
              {category}
            </span>
            <h3
              className={classnames(
                "section-title section-title--inner section-title--center-mobile",
                s.title
              )}
            >
              {title}
            </h3>
            <div className={s.testimonialNavigation}>
              <button
                type="button"
                onClick={goPrev}
                className={classnames(
                  s.testimonialNavigationButton,
                  "swiper-button-prev"
                )}
              >
                <SecondArrowIcon mod="icon--navigate" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className={classnames(
                  s.testimonialNavigationButton,
                  s.testimonialNavigationButtonNext,
                  "swiper-button-next"
                )}
              >
                <SecondArrowIcon mod="icon--navigate" />
              </button>
            </div>
          </div>
          <div className={s.testimonialSlider}>
            <div className={s.sliderWrapper}>
              <Swiper
                // modules={[Navigation]}
                {...sliderParams}
                // navigation
                // ref={swiperRef}
                containerсlass={s.testimonialSliderContainer}
              >
                {testimonialItems}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
