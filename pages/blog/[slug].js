import { createClient } from '../../prismicio';
import Post from "../../scenes/Post/Post";

 export const getServerSideProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const pages = await client.getAllByType('blogpost')
  if (!pages) {
    return { notFound: true };
  }
  return {
    props: { pages },
  };
};

const PostPage = ({ pages }) => {

  return (
    <div>      
      <Post data={pages} />     
    </div>
  );  
}

export default PostPage;

// https://prismic.io/docs/technologies/fetch-data-nextjs#example
