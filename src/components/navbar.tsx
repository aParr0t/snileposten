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

const links = {
  Program: "/program",
  "Parti og Ledere": "/partier",
  Artikler: "/artikler",
  "Om oss": "/om-oss",
};

export default function Navbar() {
  return (
    <nav className="bg-primary w-full px-2 py-4 flex flex-row gap-8">
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
      <ul className="flex flex-row items-center gap-8">
        {Object.entries(links).map(([name, href]) => (
          <li
            key={name}
            className="inline-block hover:cursor-pointer hover:underline text-secondary font-serif"
          >
            <a className="text-secondary text-lg" href={href}>
              {name}
            </a>
          </li>
        ))}
      </ul>
      <Input className="text-lg sm:max-w-[40ch]" placeholder="Søk..." />
    </nav>
  );
}
