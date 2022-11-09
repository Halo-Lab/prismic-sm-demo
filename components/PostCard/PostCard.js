import Link from "next/link";

function PostCard({ title, slug }) {
  return (
    (<Link href={`/blog/${slug.current}`} className="card">
      <div>
        <h3>{title}</h3>
      </div>
    </Link>)
  );
}

export default PostCard;
