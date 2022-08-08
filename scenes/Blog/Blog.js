import BlogHero from "./components/BlogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import Conversion from "../../components/Conversion/Conversion";
import styles from "./Blog.module.scss";
import getSlice from "../../utils/getSlice";

const Blog = ({ page }) => {

  return (
    <div className={styles.wrapper}>
      <BlogHero data={getSlice(page, "latest_posts")} />
      <LatestPosts data={getSlice(page, "latest_posts")} />      
      <Conversion data={getSlice(page, "conversion")} />
    </div>
  );
};

export default Blog;
