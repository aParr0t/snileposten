import ArticlePage from "@/components/articlePage";
import { getArticles } from "@/lib/directus";

export default async function Articles() {
  const articles = await getArticles();
  console.log(articles);

  return <ArticlePage articles={articles} />;
}
