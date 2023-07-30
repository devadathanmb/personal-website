import { getSortedPostsData } from "../../lib/posts";
import Link from "next/link";
import Date from "./Date";

export default function Posts() {
  const posts = getSortedPostsData();
  return (
    <div className="p-5 max-w-screen-lg mx-auto">
      <h1 className="text-5xl font-bold inline border-b-4 border-blue-300">
        Blogs
      </h1>
      <ul className="mt-8 w-full">
        {posts.map((post) => (
          <li className="py-2" key={post.id}>
            <Link
              className="text-xl underline underline-offset-5 font-bold"
              href={`/blogs/${post.id}`}
            >
              {post.title}
            </Link>
            <br />
            <small>
              <Date dateString={post.date} />
            </small>
          </li>
        ))}
      </ul>
    </div>
  );
}
