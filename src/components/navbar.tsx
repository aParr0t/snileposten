import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getArticles, getPartyNames } from "@/lib/directus";
import { formatDateddmmyy } from "@/lib/date";
import Image from "next/image";

export default async function Navbar() {
  const parties = await getPartyNames();
  const articles = await getArticles();

  const itemClass =
    "py-4 px-4 inline transition-colors font-medium text-lg text-secondary hover:bg-secondary hover:text-primary";
  const bigArticle = articles[0];
  return (
    <nav className="bg-primary w-full px-2 flex flex-row items-center gap-8">
      <Sheet>
        <SheetTrigger className="text-secondary">
          <IoMenu size={36} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-secondary-light">
          <SheetHeader>
            <SheetTitle className="text-tertiary text-3xl py-6 text-center">
              Siste nytt
            </SheetTitle>
            <div>
              {articles.slice(1).map((article) => (
                <Link key={article.id} href={`/artikler/${article.title}`}>
                  <div className="border-t-2 border-tertiary py-4">
                    <p className="">{formatDateddmmyy(article.date)}</p>
                    <p className="text-lg">{article.title}</p>
                  </div>
                </Link>
              ))}
              <Link href={`/artikler/${bigArticle.title}`}>
                <div className="border-t-2 border-tertiary">
                  <p className="">{formatDateddmmyy(bigArticle.date)}</p>
                  <p className="text-lg">{bigArticle.title}</p>
                  <Image
                    src={bigArticle.thumbnail}
                    alt="artikkel"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <ul className="flex flex-row">
        <li className="flex">
          <Link href="/program" className={itemClass}>
            Program
          </Link>
        </li>
        <li className="relative flex group/drop">
          <Link
            href="/partier"
            className="py-4 px-4 inline transition-colors font-medium text-lg text-secondary group-hover/drop:bg-secondary group-hover/drop:text-primary"
          >
            Parti og Ledere
          </Link>
          <ul className="absolute top-full left-0 w-full z-10 bg-secondary hidden group-hover/drop:inline">
            {parties.map((party) => (
              <li
                key={party.id}
                className="group/item hover:bg-primary transition-colors w-full"
              >
                <Link
                  href={`/partier/${party.name}`}
                  className="block px-4 w-full transition-colors font-medium text-lg text-primary uppercase group-hover/item:text-secondary"
                >
                  {party.name.length < 8 ? party.name : party.acronym}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex">
          <Link href="/artikler" className={itemClass}>
            Artikler
          </Link>
        </li>
        <li className="flex">
          <Link href="/om-oss" className={itemClass}>
            Om oss
          </Link>
        </li>
      </ul>
      <Input className="text-lg sm:max-w-[40ch]" placeholder="Søk..." />
    </nav>
  );
}
