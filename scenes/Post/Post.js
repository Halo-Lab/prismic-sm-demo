import Head from "next/head";
import { useRouter } from 'next/router';
import styles from './Post.module.scss';
import BlogPost from './components/BlogPost/BlogPost';
import RecommendPosts from './components/RecommendPosts/RecommendPosts';
import Conversion from "../../components/Conversion/Conversion";
import getSlice from "../../utils/getSlice";

const Post = ({ data }) => {  
  const router = useRouter();
  const slug   = router.query.slug;
  const currentPost = data.find(el => el.uid === slug);
  const mainPost = data.find(el => el.uid === 'main-post');

  return (
    <>
      <Head className="head">
        <title>{currentPost.pageseotitle}</title>
        <meta name="description" content={currentPost.pageseodescription} />
      </Head>
      <div className={styles.wrapper}>
        <BlogPost data={currentPost.data} />
        <RecommendPosts data={data} />
        <Conversion data={getSlice(mainPost.data.slices, "conversion")} />
      </div>
    </>
  );
};

export default Post;
