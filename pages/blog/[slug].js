import { useRouter } from 'next/router';
import { createClient, linkResolver } from '../../prismicio';
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
  const router = useRouter();
  const slug   = router.query.slug;  
  const page = pages.find(el => el.uid === slug);
  // console.log(slug, pages, page);
  return (
    <div>      
      <Post data={page.data} />     
    </div>
  );  
}

export default PostPage;

// https://prismic.io/docs/technologies/fetch-data-nextjs#example
