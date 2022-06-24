import BlogHero from "./components/BlogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import Conversion from "../Home/components/Conversion/Conversion";
import styles from "./Blog.module.scss";

const Blog = ({ data, postData, homeData }) => {
  return (
    <div className={styles.wrapper}>
      <BlogHero postData={postData[0]} />
      <LatestPosts postData={postData} />
      <Conversion conversion={homeData} />
    </div>
  );
};

export default Blog;
