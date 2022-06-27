import React, { useState, useEffect } from "react";
import styles from "./RecommendPosts.module.scss";
import PostCard from "../../../Blog/components/LatestPosts/PostCard/PostCard";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
SwiperCore.use([Pagination]);

const renderPosts = (data) => {
  const postData = data[1].items.slice(0, 3);
  const postsList = postData.map(item => {
    return <PostCard key={item.latestPostsLink} post={item} />;
  });
  return postsList;
};

const renderSwiperPosts = (data) => {
  const postData = data[1].items.slice(0, 4);
  const postsList = postData.map(item => {
    return (
      <SwiperSlide key={item.latestPostsLink}>
        <PostCard post={item} />
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
  const {recommendPostsTitle, recommendPostsSubTitle} = data[2].primary

  const [isMobile, setMobile] = useState(false);
  const screenWidth = useMediaQuery({ query: "(max-width: 754px)" });

  useEffect(() => {
    setMobile(screenWidth);
  }, [screenWidth]);

  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.recommend_head}>
          <p className="section-category">{recommendPostsTitle}</p>
          <h2 className="section-title">{recommendPostsSubTitle}</h2>
          </div>
        <div className={styles.postsInner}>
          {isMobile ? swiperPost(data) : renderPosts(data)}
        </div>
      </div>
    </div>
  );
};

export default RecommendPosts;
