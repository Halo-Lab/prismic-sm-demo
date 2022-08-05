import s from "./TestimonialsItem.module.scss";
import TestimonialAuthor from "./TestimonialAuthor/TestimonialAuthor";
import Rating from "./Rating/Rating";
import classNames from "classnames";

const TestimonialsItem = ({ data, key }) => {
  const { testimonialsStarCount, testimonialsCardText, testimonialsCardLogo, testimonialsCardSign, testimonialsCardProfession } =
  data;

  return (
    <div key={key} className={classNames(`swiper-slide ${s.testimonialItem}`)}>
      <div className={s.testimonialItemHeader}>
        <Rating starsNum={testimonialsStarCount} />
      </div>
      <span className={s.testimonialItemDesc}>{testimonialsCardText}</span>
      <TestimonialAuthor
        name={testimonialsCardSign}
        position={testimonialsCardProfession}
        avatarImg={testimonialsCardLogo}
        avatarAlt={testimonialsCardSign}
      />
    </div>
  );
};

export default TestimonialsItem;
