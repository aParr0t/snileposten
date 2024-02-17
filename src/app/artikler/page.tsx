import ArticlePage from "@/components/articlePage";
import { getArticleCategories, getArticles } from "@/lib/directus";

export const revalidate = 120;

export default async function Articles() {
  const articles = await getArticles();
  const categories = await getArticleCategories();

  return <ArticlePage articles={articles} categories={categories} />;
}
