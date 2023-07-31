import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Date from "@/app/components/Date";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineCalendar } from "react-icons/ai";

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
        <p className="font-bold flex items-center text-1xl mb-9">
          <AiOutlineCalendar className="mr-2" />
          <Date dateString={date} />
        </p>
        <article>
          <section
            className={`prose prose-code:whitespace-pre-line prose-pre:bg-gray-900 dark:prose-invert`}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></section>
        </article>
        <button className="w-fit px-5 flex items-center py-2 my-3 rounded-md bg-gradient-to-tr from-cyan-600 to-blue-500">
          <IoIosArrowBack className="mr-1" />
          <Link href="/blogs">Back</Link>
        </button>
      </div>
    </div>
  );
}
