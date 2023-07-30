import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Date from "@/app/components/Date";

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    blogId: post.id,
  }));
}

export default async function Blog({ params }: { params: { blogId: string } }) {
  const posts = getSortedPostsData();
  const { blogId } = params;

  if (!posts.find((post) => post.id === blogId)) {
    return notFound();
  }

  const { title, date, contentHtml } = await getPostData(blogId);
  return (
    <div className="pt-20 bg-gradient-to-b min-h-screen from-black via-black to-gray-950">
      <div className="p-5 flex justify-center items-center flex-col">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline leading-loose border-b-4 border-blue-300">
            {title}
          </h1>
        </div>
        <p className="font-bold text-1xl mb-9">
          <Date dateString={date} />
        </p>
        <article>
          <section
            className={`prose prose-code:whitespace-pre-line prose-pre:bg-gray-900 dark:prose-invert`}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></section>
        </article>
      </div>
    </div>
  );
}
