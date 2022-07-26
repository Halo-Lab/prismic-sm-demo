import BlogHero from "./components/BlogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import styles from "./Blog.module.scss";

const Blog = ({ page }) => {
  return (
    <div className={styles.wrapper}>
      <BlogHero data={page[0]} />
      <LatestPosts data={page[0]} />
    </div>
  );
};

export default Blog;
