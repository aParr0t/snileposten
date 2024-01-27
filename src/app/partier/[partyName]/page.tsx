import Image from "next/image";

import { getImage, getParty, getPartyNames } from "@/lib/directus";

export default async function Parties({
  params,
}: {
  params: { partyName: string };
}) {
  const partyName = decodeURIComponent(params.partyName);
  const { quote, leader, description, name, color, portrait, logo } =
    await getParty(partyName);

  const portraitImage = await getImage(portrait);
  const partyImage = await getImage(logo);

  return (
    <div className="flex flex-row mx-auto px-8 gap-6">
      <div
        className="flex flex-col py-12 w-[35ch]"
        style={{ backgroundColor: color }}
      >
        <Image
          src={portraitImage}
          alt="partileder"
          width={300}
          height={300}
          className="aspect-auto w-full"
          priority
        />
        <div className="text-white px-6 py-2 mt-10">
          <h3 className="text-xl mb-4">Partiets hjertesaker</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Image
          src={partyImage}
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
    </div>
    // old design vvv
    // <div className="flex flex-col sm:flex-row font-serif mx-auto p-8 gap-10">
    //   <div>
    //     <div className="pl-4 mb-6">
    //       <h1 className="text-3xl text-primary mb-4">{name} ()</h1>
    //       <span>Leder: {leader}</span>
    //     </div>
    //     <div className="bg-secondary w-fit flex flex-col justify-center rounded-xl p-4">
    //       <span className="text-center text-2xl font-semibold">Info</span>
    //       <p className="max-w-[40ch]">{description}</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-col max-w-[25ch] justify-stretch">
    //     <div className="flex place-content-center px-14 py-10 border-[20px] border-primary rounded-full w-full">
    //       <Image src={Partyleader} alt="Partileder" width={100} />
    //     </div>
    //     <span className="px-4">
    //       <span className="text-primary text-xl font-semibold">Quote:</span>{" "}
    //       {quote}
    //     </span>
    //   </div>
    // </div>
  );
}

export async function generateStaticParams() {
  const partyNames = await getPartyNames();

  return partyNames.map((partyName) => ({
    partyName: partyName.name,
  }));
}
