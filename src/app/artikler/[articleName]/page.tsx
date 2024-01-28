import { getArticle } from "@/lib/directus";
import parse from "html-react-parser";
import Image from "next/image";

export default async function Article({
  params,
}: {
  params: { articleName: string };
}) {
  const articleName = decodeURIComponent(params.articleName);
  const article = await getArticle(articleName);

  return (
    <div className="max-w-prose mx-auto flex flex-col py-8">
      <Image
        src={article.thumbnail}
        alt="article image"
        width={500}
        height={300}
        className="w-full mb-4"
        priority
      />
      <div className="px-2" id="article">
        <h1 className="text-3xl lg:text-5xl font-serif font-semibold">
          {article.title}
        </h1>
        {parse(article.content)}
      </div>
    </div>
  );
}
