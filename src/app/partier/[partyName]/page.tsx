import Image from "next/image";

import { getParty, getPartyNames } from "@/lib/directus";
import VideoPlayer from "@/components/VideoPlayer";

export const revalidate = 120;

export default async function Party({
  params,
}: {
  params: { partyName: string };
}) {
  const partyName = decodeURIComponent(params.partyName);
  const { quote, leader, description, name, color, portrait, logo, video, id } =
    await getParty(partyName);

  // const timeStamp = new Date().getTime();

  return (
    <div className="grid grid-cols-1 md:grid-cols-[350px_auto] mx-auto md:grid-rows-2 max-w-[100ch]">
      {/* Image cache invalidation taken from: https://stackoverflow.com/a/76384689 */}
      <div className="py-12 relative justify-center flex">
        <div
          className="absolute top-0 left-0 w-full h-full hidden md:block z-0"
          style={{ backgroundColor: color }}
        ></div>
        <Image
          // src={`${portrait}?${timeStamp}`}
          src={portrait}
          alt="partileder"
          width={600}
          height={600}
          className="w-full max-w-[350px] z-30 relative"
          sizes="50vw"
        />
      </div>
      <div className="flex flex-col items-center self-center p-8">
        <Image
          src={logo}
          alt="partilogo"
          width={200}
          height={100}
          className="aspect-auto"
          priority
        />
        <span className="text-lg">{leader}</span>
        <span
          className="font-bold text-lg max-w-[20ch] text-center"
          style={{ color: color }}
        >
          &quot;{quote}&quot;
        </span>
      </div>
      <div className="text-white px-6 py-2" style={{ backgroundColor: color }}>
        <h3 className="text-xl mb-4">Partiets hjertesaker</h3>
        <p>{description}</p>
      </div>
      <div className="hidden md:block p-4">
        {video && (
          <VideoPlayer
            // src={`${video}?${timeStamp}`}
            src={video}
            className="border-y-8 py-2 max-w-full"
            style={{ borderColor: color }}
          />
        )}
      </div>
      <div
        className="p-4 flex md:hidden justify-center"
        style={{ backgroundColor: color }}
      >
        {video && (
          <VideoPlayer
            // src={`${video}?${timeStamp}`}
            src={video}
            className="py-2 max-w-full"
          />
        )}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const partyNames = await getPartyNames();

  return partyNames.map((partyName) => ({
    partyName: partyName.name,
  }));
}
