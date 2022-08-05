import BlogHero from "./components/BlogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import styles from "./Blog.module.scss";
import getSlice from "../../utils/getSlice";

const Blog = ({ page }) => {

  return (
    <div className={styles.wrapper}>
      <BlogHero data={getSlice(page, "latest_posts")} />
      <LatestPosts data={getSlice(page, "latest_posts")} />
    </div>
  );
};

export default Blog;
