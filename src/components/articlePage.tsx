"use client";

import Image from "next/image";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { articleReducer } from "@/lib/directus";
import { formatDateddmmyy } from "@/lib/date";
import Link from "next/link";

const categories = [
  "Miljø",
  "Arbeidsliv",
  "Helse og omsorg",
  "Næring og økonomi",
  "Kultur",
];

export default function ArticlePage({
  articles,
}: {
  articles: ReturnType<typeof articleReducer>[];
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
  const bigArticle = articles[0];
  return (
    <div className="flex flex-col place-items-center mx-auto p-3 gap-8 max-w-wideProse">
      <ul className="flex flex-row gap-3 flex-wrap">
        {categories.map((category) => {
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
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
        <Link href={`/artikler/${bigArticle.title}`}>
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
        <div className="flex flex-col gap-2">
          {articles.slice(1).map((article) => {
            return (
              <Link href={`/artikler/${article.title}`} key={article.id}>
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
                    className="w-[200px] h-[150px] object-cover flex-grow basis-0 min-w-0"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
