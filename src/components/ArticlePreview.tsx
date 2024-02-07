import { Article } from "@/lib/directus";
import Image from "next/image";
import { formatDateddmmyy } from "@/lib/date";
import Link from "next/link";

export default function ArticlePreview({
  article,
  className,
}: {
  article: Article;
  className?: string;
}) {
  return (
    <Link
      href={`/artikler/${article.id}`}
      key={article.id}
      className={`${className}`}
    >
      <div
        key={article.id}
        className="flex flex-row gap-8 border-l-2 border-tertiary px-2"
      >
        <div className="flex-grow basis-0 min-w-0">
          <span className="block font-semibold text-sm capitalize">
            {formatDateddmmyy(article.date)}
          </span>
          <h2 className="font-bold text-xl">{article.title}</h2>
          <span className="font-semibold text-sm capitalize">
            {article.categories}
          </span>
        </div>
        <Image
          src={article.thumbnail}
          alt={article.title}
          width={200}
          height={200}
          className="w-[150px] aspect-[5/4] object-cover flex-grow basis-0 min-w-0"
        />
      </div>
    </Link>
  );
}
