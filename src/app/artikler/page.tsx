import ArticlePage from "@/components/articlePage";
import { getArticleCategories, getArticles } from "@/lib/directus";
import { Suspense } from "react";

export const revalidate = 120;

export default async function Articles() {
  const articles = await getArticles();
  const categories = await getArticleCategories();

  return (
    <Suspense>
      <ArticlePage articles={articles} categories={categories} />;
    </Suspense>
  );
}
