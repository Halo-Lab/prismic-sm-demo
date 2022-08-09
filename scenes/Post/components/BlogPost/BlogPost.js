import styles from "./BlogPost.module.scss";
import { PrismicRichText } from '@prismicio/react';
import * as prismicH from "@prismicio/helpers";
import YoutubeEmbed from '../../../../components/YoutubeEmbed/YoutubeEmbed'

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogPost = ({ data, slug }) => {  
  const { items } = data[0];
  const currentPage = slug.split('-')[1];
  const {latestPostsImageCover, latestPostsTitle, latestpostsdate, latestPostsText} = items[currentPage];
  const date = prismicH.asDate(latestpostsdate);

  const video = Object.keys(items[currentPage].video).length ? <YoutubeEmbed embedId={items[currentPage].video.embed_url.replace('https://youtu.be/', '')} title={items[currentPage].video.title} /> : '';
  
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
          <p className={styles.postDescription}>
            {dateFormatter.format(date)}
          </p>
          <div className={styles.postDescription}>
            <PrismicRichText field={latestPostsText} />
          </div>
          {video}         
        </div>
      </div>
    </div>
  );
};

export default BlogPost;