import { useState } from "react";
import classnames from "classnames";
import SecondArrowIcon from "../../../../assets/SecondArrowIcon/SecondArrowIcon";
import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const LatestPosts = ({ data }) => {
  const {items} = data;

  const [isOpenPosts, setIsOpenPosts] = useState(true);

  const handlePostsShow = () => {
    setIsOpenPosts(!isOpenPosts);
  };

  const renderPosts = (items) => {
    const postsList = items.map((item, index) => {
      return <PostCard 
        isOpenPosts={isOpenPosts}
        post={item}
        key={index.toString()}
        index={index} 
      />;
    });
    return postsList;
  };
  
  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.postsInner}>
          {renderPosts(items.slice(1))}
        </div>
        <div className={styles.postsFooter}>
          <button
            onClick={handlePostsShow}
            className={classnames(
              "button button--regular button--show-more",
              { "button--show-more-active": !isOpenPosts }
              )}
            >
            {isOpenPosts ? "Show more Articles" : "Hide more Articles"}
            <SecondArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
