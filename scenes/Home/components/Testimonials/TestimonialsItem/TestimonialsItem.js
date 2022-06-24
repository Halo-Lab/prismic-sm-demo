import React from "react";
import s from "./TestimonialsItem.module.scss";
import TestimonialAuthor from "./TestimonialAuthor/TestimonialAuthor";
import Rating from "./Rating/Rating";
import classNames from "classnames";

const TestimonialsItem = ({ data, key }) => {
  const { userAvatar, userName, userPosition, reviewStars, reviewDescription } =
    data;

  return (
    <div key={key} className={classNames(`swiper-slide ${s.testimonialItem}`)}>
      <div className={s.testimonialItemHeader}>
        <Rating starsNum={reviewStars} />
      </div>
      <span className={s.testimonialItemDesc}>{reviewDescription}</span>
      <TestimonialAuthor
        name={userName}
        position={userPosition}
        avatarImg={userAvatar}
        avatarAlt={userName}
      />
    </div>
  );
};

export default TestimonialsItem;
