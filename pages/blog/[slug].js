import { createClient } from '../../prismicio'
import Post from "../../scenes/Post/Post";

export const getServerSideProps = async ({ previewData }) => {
  const client = createClient({ previewData })
  const page = await client.getByUID('blog', 'blog')
  if (!page) {
    return { notFound: true };
  }
  return {
    props: { page },
  };
};

function PostPage({ page }) {  

  return (
    <div>      
      <Post data={page.data.slices} />     
    </div>
  );
}

export default PostPage;
