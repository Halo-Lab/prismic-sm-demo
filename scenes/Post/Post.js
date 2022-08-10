import styles from './Post.module.scss';
import { useRouter } from 'next/router';
import BlogPost from './components/BlogPost/BlogPost';
import RecommendPosts from './components/RecommendPosts/RecommendPosts';
import Conversion from "../../components/Conversion/Conversion";
import getSlice from "../../utils/getSlice";

const Post = ({ data }) => {
  const router = useRouter();
  const slug = router.query.slug;

  return (
    <div className={styles.wrapper}>
      <BlogPost data={getSlice(data, "latest_posts")} slug={slug} />
      <RecommendPosts data={getSlice(data, "latest_posts")} />
      <Conversion data={getSlice(data, "conversion")} />
    </div>
  );
};

export default Post;
