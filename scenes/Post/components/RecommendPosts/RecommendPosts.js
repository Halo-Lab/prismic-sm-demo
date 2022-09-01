import { useState, useEffect } from "react";
import styles from "./RecommendPosts.module.scss";
import PostCard from "../../../Blog/components/LatestPosts/PostCard/PostCard";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination]);

const renderPosts = (data) => {
  const postData = data.slice(1, 4);
  const postsList = postData.map((item, index) => {
    return <PostCard key={index} post={item.data} />;
  });
  return postsList;
};

const renderSwiperPosts = (data) => {
  const postData = data.items.slice(1, 5);
  const postsList = postData.map((item, index) => {
    return (
      <SwiperSlide key={index}>
        <PostCard post={item.data} />
      </SwiperSlide>
    );
  });
  return postsList;
};

const swiperPost = (data) => {
  const sliderParams = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 16,
  };
  
  return (
    <Swiper
      {...sliderParams}
      pagination={{ clickable: true }}
      className={styles.postsSlider}
    >
      {renderSwiperPosts(data)}
    </Swiper>
  ); 
};

const RecommendPosts = ({data}) => {  
  const [isMobile, setMobile] = useState(false);
  const screenWidth = useMediaQuery({ query: "(max-width: 754px)" });

  useEffect(() => {
    setMobile(screenWidth);
  }, [screenWidth]);

  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.recommend_head}>
          <p className="section-category">Next read</p>
          <h2 className="section-title">Recommended articles</h2>
          </div>
        <div className={styles.postsInner}>
          {isMobile ? swiperPost(data) : renderPosts(data)}
        </div>
      </div>
    </div>
  );
};

export default RecommendPosts;
