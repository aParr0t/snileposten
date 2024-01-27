import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMenu } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { getPartyNames } from "@/lib/directus";

export default async function Navbar() {
  const parties = await getPartyNames();

  return (
    <nav className="bg-primary w-full px-2 flex flex-row items-center gap-8">
      <Sheet>
        <SheetTrigger className="text-secondary">
          <IoMenu size={36} />
        </SheetTrigger>
        <SheetContent side="left" className="bg-secondary text-tertiary">
          <SheetHeader>
            <SheetTitle className="text-tertiary text-3xl">
              Siste nytt
            </SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <ul className="flex flex-row">
        <li className="flex">
          <Link
            href="/program"
            className="py-4 px-4 inline transition-colors font-medium text-lg text-secondary hover:bg-secondary hover:text-primary"
          >
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
      </ul>
      <Input className="text-lg sm:max-w-[40ch]" placeholder="Søk..." />
    </nav>
  );
}
