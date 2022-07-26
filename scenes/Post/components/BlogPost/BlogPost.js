import styles from "./BlogPost.module.scss";
import { PrismicRichText } from '@prismicio/react';

const BlogPost = ({ data, slug }) => {  
  const { items } = data[0];
  const currentPage = slug.split('-')[1];
  const {latestPostsImageCover, latestPostsTitle, latestPostsDate, latestPostsText} = items[currentPage];  
  
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.postPreview}
        style={{
          backgroundImage: `url(${latestPostsImageCover.url})`,
        }}
      />
      <div className="container">
        <div className={styles.inner_container}>          
          <h1 className={styles.postTitle}>{latestPostsTitle}</h1>
          <p className={styles.postDescription}>{latestPostsDate}</p>
          <div className={styles.postDescription}>
            <PrismicRichText field={latestPostsText} />
          </div>          
        </div>
      </div>
    </div>
  );
};

export default BlogPost;