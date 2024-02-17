import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { getParties } from "@/lib/directus";
import Link from "next/link";

export const revalidate = 120;

export default async function Parties() {
  const parties = await getParties();

  return (
    <div className="mx-auto py-4 px-4">
      <h1 className="text-3xl text-center">Les mer om de ulike partiene:</h1>
      <ul className="flex flex-col gap-4 items-center mt-4">
        {parties.map((party) => (
          <li key={party.id}>
            <Link href={`/partier/${party.name}`}>
              <Card className="flex flex-row border p-2">
                <Image
                  src={party.logo}
                  alt={party.name}
                  width={400}
                  height={400}
                  className="w-[150px] aspect-square object-contain"
                />
                <CardContent className="flex flex-col">
                  <CardTitle className="font-semibold">{party.name}</CardTitle>
                  <CardDescription className="max-w-[30ch] line-clamp-3">
                    {party.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
