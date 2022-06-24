import PostCard from "./PostCard";

function Posts({ posts }) {
  return (
    <div>
      <div>
        {posts?.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
