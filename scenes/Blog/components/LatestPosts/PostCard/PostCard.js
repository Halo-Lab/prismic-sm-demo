import React from "react";
import Link from "next/link";
import styles from "./PostCard.module.scss";

const PostCard = ({ post }) => {
  const { mainImage, title, subtitle, slug } = post;

  const cutDescription = (text) => {
    if (text) {
      return text.slice(0, 87) + "...";
    }
  };
  return (
    <div>
      <Link href={`/blog/${slug.current}`}>
        <a className={styles.postCard}>
          <div className={styles.postImageBox}>
            <img
              src={''}
              className={styles.postImg}
              alt={"post icon"}
            />
          </div>
          <h3 className={styles.postTitle}>{title}</h3>
          <p className={styles.postDescription}>{cutDescription(subtitle)}</p>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
