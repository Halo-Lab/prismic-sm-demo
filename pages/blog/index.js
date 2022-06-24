import { groq } from "next-sanity";
import { getClient, usePreviewSubscription } from "../../utils/sanity";
// import Posts from "../../components/Posts";
import React from "react";
import Blog from "../../scenes/Blog/Blog";

const query = groq`*[_type == "blogNew"][0]`;
const queryHome = groq`*[_type == "home"][0].conversion`;
const postsQuery = groq`*[_type == "post"] | order(_createdAt desc)`;

function BlogPage(props) {
  const { blogData, postData, preview, homeData } = props;

  const { data } = usePreviewSubscription(query, {
    initialData: blogData ?? "",
    enabled: true,
  });

  const { data: prod } = usePreviewSubscription(postsQuery, {
    initialData: postData,
    enabled: true,
  });
  return (
    <div>
      <Blog data={data} postData={postData} homeData={homeData} />
    </div>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const blogData = await getClient(preview).fetch(query);
  const postData = await getClient(preview).fetch(postsQuery);
  const homeData = await getClient(preview).fetch(queryHome);

  return {
    props: {
      preview,
      blogData,
      postData,
      homeData,
    },
  };
}

export default BlogPage;
