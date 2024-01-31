"use client";

import Image from "next/image";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category, Article } from "@/lib/directus";
import { formatDateddmmyy } from "@/lib/date";
import Link from "next/link";
import ArticlePreview from "@/components/ArticlePreview";

export default function ArticlePage({
  articles,
  categories,
}: {
  articles: Article[];
  categories: Category[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function handleClick(category: string) {
    const clickedSameCategory = selectedCategory === category;
    const params = new URLSearchParams(searchParams);
    if (clickedSameCategory) {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    const newPath = `${pathname}?${params.toString()}`;
    router.push(newPath);
  }

  if (articles.length === 0) {
    return (
      <div className="absolute w-full h-full flex flex-col items-center justify-center text-lg">
        <span>Ingen artikler nå for tiden. Kom tilbake senere</span>
      </div>
    );
  }

  const selectedCategory = searchParams.get("category");
  let articleSection;
  if (selectedCategory) {
    const filteredArticles = articles.filter((article) =>
      article.categories.includes(selectedCategory)
    );
    articleSection = (
      <div className="flex flex-row flex-wrap gap-4 place-content-center">
        {filteredArticles.map((article) => (
          <ArticlePreview
            article={article}
            key={article.id}
            className="max-w-[45%]"
          />
        ))}
      </div>
    );
  } else {
    const bigArticle = articles[0];
    articleSection = (
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 flex-1">
        <Link
          href={`/artikler/${bigArticle.title}`}
          className="flex-grow basis-0"
        >
          <div>
            <div className="pl-2 mb-6">
              <span className="block font-semibold text-sm capitalize">
                {formatDateddmmyy(bigArticle.date)}
              </span>
              <span className="font-semibold">{bigArticle.categories}</span>
              <h2 className="text-4xl font-bold">{bigArticle.title}</h2>
            </div>
            <Image
              src={bigArticle.thumbnail}
              alt={bigArticle.title}
              width={400}
              height={400}
              className="border-l-8 border-tertiary"
            />
          </div>
        </Link>
        <div className="flex flex-col gap-2 flex-grow basis-0">
          {articles.slice(1).map((article) => {
            return <ArticlePreview article={article} key={article.id} />;
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col place-items-center mx-auto p-3 py-8 gap-8 max-w-wideProse">
      <ul className="flex flex-row gap-3 flex-wrap">
        {categories.map((category) => {
          console.log(category);

          const bg =
            selectedCategory === category ? "bg-primary" : "bg-secondary";
          const textColor =
            selectedCategory === category ? "text-secondary" : "text-primary";
          return (
            <li
              className={`${bg} ${textColor} rounded-full py-1 px-4 hover:bg-primary hover:text-secondary transition-colors hover:cursor-pointer`}
              key={category}
              onClick={() => handleClick(category)}
            >
              {category}
            </li>
          );
        })}
      </ul>
      {articleSection}
    </div>
  );
}
