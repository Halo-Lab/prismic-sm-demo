import styles from "./YoutubeEmbed.module.scss";

const YoutubeEmbed = ({ embedId, title }) => (
  <div className={styles.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={`${title}`}
    />
  </div>
);

export default YoutubeEmbed;