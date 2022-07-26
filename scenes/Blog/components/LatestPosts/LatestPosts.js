import styles from "./LatestPosts.module.scss";
import PostCard from "./PostCard/PostCard";

const renderPosts = (items) => {
  const postsList = items.map((item, index) => {
    return <PostCard key={index} post={item} />;
  });

  return postsList;
};

const LatestPosts = ({ data }) => {
  const {items} = data;
  
  return (
    <div className={styles.posts}>
      <div className="container">
        <div className={styles.postsInner}>
          {renderPosts(items.slice(1))}
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
