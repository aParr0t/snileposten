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
    "flex transition-colors hover:bg-secondary hover:text-primary text-secondary";
  const linkClass = "py-4 px-4 inline font-medium text-lg self-center";
  const bigArticle = articles[0];
  return (
    <nav className="bg-primary w-full px-2 flex flex-row items-center gap-8 py-2 md:py-0">
      <Sheet>
        <SheetTrigger className="text-secondary">
          <IoMenu size={36} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-secondary-light">
          <SheetHeader>
            <div>
              <ul className="flex-col flex gap-4 lg:hidden text-xl text-start">
                <li>
                  <Link href="/" className="font-serif">
                    LILLENYTT
                  </Link>
                </li>
                <li>
                  <Link href="/program">Program</Link>
                </li>
                <li>
                  <Link href="/partier">Parti og Ledere</Link>
                </li>
                <li>
                  <Link href="/artikler">Artikler</Link>
                </li>
                <li>
                  <Link href="/om-oss">Om oss</Link>
                </li>
              </ul>
            </div>
            <div>
              <SheetTitle className="text-tertiary text-3xl py-6 text-center">
                Siste nytt
              </SheetTitle>
              {articles.slice(1).map((article) => (
                <Link key={article.id} href={`/artikler/${article.id}`}>
                  <div className="border-t-2 border-tertiary py-4 text-start">
                    <p className="">{formatDateddmmyy(article.date)}</p>
                    <p className="text-lg">{article.title}</p>
                  </div>
                </Link>
              ))}
              <Link href={`/artikler/${bigArticle.id}`}>
                <div className="border-t-2 border-tertiary text-start pt-4">
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
      <ul className="flex-row hidden md:flex whitespace-nowrap">
        <li className={`${itemClass}`}>
          <Link href="/" className={`${linkClass} font-serif !text-3xl`}>
            LILLENYTT
          </Link>
        </li>
        <li className={`${itemClass}`}>
          <Link href="/program" className={linkClass}>
            Program
          </Link>
        </li>
        <li className={`${itemClass} relative group/drop`}>
          <Link href="/partier" className={linkClass}>
            Parti og Ledere
          </Link>
          <ul className="absolute top-full left-0 w-full z-50 bg-secondary hidden group-hover/drop:inline">
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
        <li className={`${itemClass}`}>
          <Link href="/artikler" className={linkClass}>
            Artikler
          </Link>
        </li>
        <li className={`${itemClass}`}>
          <Link href="/om-oss" className={linkClass}>
            Om oss
          </Link>
        </li>
      </ul>
      {/* <Input className="text-lg sm:max-w-[40ch] w-fit" placeholder="Søk..." /> */}
    </nav>
  );
}
