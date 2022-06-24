import { groq } from "next-sanity";
import { getClient, usePreviewSubscription, urlFor } from "../../utils/sanity";
import BlockContent from "@sanity/block-content-to-react";
import Post from "../../scenes/Post/Post";

const query = groq`*[_type == "post" && slug.current == $slug][0]`;
const queryBlog = groq`*[_type == "blogNew"][0]`;
const queryHome = groq`*[_type == "home"][0].conversion`;
const postsQuery = groq`*[_type == "post"]`;

function PostPage({ postData, blogData, allPostData, homeData, preview }) {
  const { data: post = {} } = usePreviewSubscription(query, {
    params: { slug: postData?.slug?.current },
    initialData: postData,
    enabled: true,
  });

  const { data } = usePreviewSubscription(queryBlog, {
    initialData: blogData ?? "",
    enabled: true,
  });

  return (
    <div>
      <Post
        post={post}
        data={data}
        allPostData={allPostData}
        homeData={homeData}
      />
    </div>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const postData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });

  const allPostData = await getClient(preview).fetch(postsQuery);
  const blogData = await getClient(preview).fetch(queryBlog);
  const homeData = await getClient(preview).fetch(queryHome);

  return {
    props: { preview, postData, blogData, allPostData, homeData },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export default PostPage;
