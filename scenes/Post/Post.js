import Head from "next/head";
import styles from './Post.module.scss';
import BlogPost from './components/BlogPost/BlogPost';
import RecommendPosts from './components/RecommendPosts/RecommendPosts';
import Conversion from "../../components/Conversion/Conversion";
import getSlice from "../../utils/getSlice";

const Post = ({ data }) => {
  // console.log(data);

  return (
    <>
      <Head className="head">
        <title>{data.pageseotitle}</title>
        <meta name="description" content={data.pageseodescription} />        
      </Head>
      <div className={styles.wrapper}>
        <BlogPost data={data} />
        {/* <RecommendPosts data={getSlice(data, "latest_posts")} />
        <Conversion data={getSlice(data, "conversion")} /> */}
      </div>
    </>
  );
};

export default Post;
