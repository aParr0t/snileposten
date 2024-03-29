import Image from "next/image";
import { getGovernment } from "@/lib/directus";

export const revalidate = 120;

export default async function Government() {
  const government = await getGovernment();

  return (
    <div className="mx-auto py-4 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        {government.map((person) => (
          <div
            key={person.id}
            className="flex flex-row gap-6 border-b-4 border-primary py-4 pr-4"
          >
            <Image
              src={person.portrait}
              alt={person.name}
              width={200}
              height={200}
              className="md:w-[150px] w-1/3"
            />
            <div className="flex flex-col text-secondary text-xl">
              <h3 className="text-2xl font-bold">{person.role}</h3>
              <p className="">{person.name}</p>
              <p className="">{person.department}</p>
            </div>
          </div>
        ))}
        <div className="absolute bg-white w-full h-[10px] bottom-0 scale-[1.05]">
          {/* this div removes the borders of the last list items */}
        </div>
      </div>
    </div>
  );
}
