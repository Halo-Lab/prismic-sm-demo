import styles from "./Post.module.scss";
import { useRouter } from 'next/router'
import BlogPost from './components/BlogPost/BlogPost'
import RecommendPosts from './components/RecommendPosts/RecommendPosts'

const Post = ({ data }) => {
  const router = useRouter()
  const slug = router.query.slug

  return (
    <div className={styles.wrapper}>
      <BlogPost data={data} slug={slug} />
      <RecommendPosts data={data} />
    </div>
  );
};

export default Post;
