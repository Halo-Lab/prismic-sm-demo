import Link from "next/link";

function PostCard({ title, slug }) {
  return (
    <Link href={`/blog/${slug.current}`}>
      <a className="card">
        <div>
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
}

export default PostCard;
