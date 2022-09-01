import Image from 'next/image';
import Link from "next/link";
import classnames from "classnames";
import styles from "./PostCard.module.scss";
import cutDescription from '../../../../../utils/cutDescription'

const PostCard = ({ post, index, isOpenPosts }) => {
  const { postimage, posttitle, posttext, postlink } = post;

  return (
    <div
      className={classnames(styles.post, {
        [styles.postHide]: index > 2 && isOpenPosts,
      })}
      key={index}
    >
      <Link href={`/blog/${postlink}`}>
        <a className={styles.postCard}>
          <div className={styles.postImageBox}>
            <div className={styles.imageContainer}>
              <Image src={postimage.url} className={styles.image} alt={postimage.alt} layout="fill" priority /> 
            </div>
          </div>
          <h3 className={styles.postTitle}>{posttitle}</h3>
          <p className={styles.postDescription}>
            {cutDescription(posttext[0].text, 87)}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default PostCard;
