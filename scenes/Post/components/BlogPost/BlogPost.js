import styles from "./BlogPost.module.scss";
import { PrismicRichText } from '@prismicio/react';
import * as prismicH from "@prismicio/helpers";
import YoutubeEmbed from '../../../../components/YoutubeEmbed/YoutubeEmbed';

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

const BlogPost = ({ data }) => {
  const {postimagecover, posttitle, postdate, posttext } = data;
  const date = prismicH.asDate(postdate);
  
  const video = Object.keys(data.postvideo).length ? <YoutubeEmbed embedId={data.postvideo.embed_url.replace('https://youtu.be/', '')} title={data.postvideo.title} /> : '';
  
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.postPreview}
        style={{
          backgroundImage: `url(${postimagecover.url})`,
        }}
      />
      <div className="container">
        <div className={styles.inner_container}>          
          <h1 className={styles.postTitle}>{posttitle}</h1>
          <p className={styles.postDescription}>
            Last updated: {dateFormatter.format(date)}
          </p>
          <div className={styles.postDescription}>
            <PrismicRichText field={posttext} />
          </div>
          {video}         
        </div>
      </div>
    </div>
  );
};

export default BlogPost;