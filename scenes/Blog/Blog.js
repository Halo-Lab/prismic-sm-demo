import Head from "next/head";
import BlogHero from "./components/BlogHero/BlogHero";
import LatestPosts from "./components/LatestPosts/LatestPosts";
import Conversion from "../../components/Conversion/Conversion";
import styles from "./Blog.module.scss";
import getSlice from "../../utils/getSlice";

const Blog = ({ page }) => {
  const {pageseotitle, pageseodescription, slices} = page;

  return (
    <>
      <Head className="head">
        <title>{pageseotitle}</title>
        <meta name="description" content={pageseodescription} />        
      </Head>
      <div className={styles.wrapper}>
        <BlogHero data={getSlice(slices, "latest_posts")} />
        <LatestPosts data={getSlice(slices, "latest_posts")} />      
        <Conversion data={getSlice(slices, "conversion")} />
      </div>
    </>
  );
};

export default Blog;
