import Image from "next/image";

import Partyleader from "/public/static/images/dummy images/partyleader.png";

export default function Parties() {
  const party = "Arbeiderpartiet";
  const short = "AP";
  const leader = "Erik Viken";
  const quote = "Natis explicta quae pror as aciunto toreria ve";

  return (
    <div className="flex flex-col sm:flex-row font-serif mx-auto p-8 gap-10">
      <div>
        <div className="pl-4 mb-6">
          <h1 className="text-3xl text-primary mb-4">
            {party} ({short})
          </h1>
          <span>Leder: {leader}</span>
        </div>
        <div className="bg-secondary w-fit flex flex-col justify-center rounded-xl p-4">
          <span className="text-center text-2xl font-semibold">Info</span>
          <p className="max-w-[40ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            nihil, perspiciatis modi ducimus omnis nam necessitatibus ea optio
            suscipit hic quidem similique dolore eum doloribus harum nemo quod
            dolorem dolor magnam libero obcaecati atque distinctio. Adipisci
            praesentium quo dolores tempore laudantium reiciendis architecto
            necessitatibus error quidem provident hic culpa dolore porro rerum,
            quibusdam accusamus impedit optio at omnis! Sed a pariatur hic
            recusandae animi quae ullam, quasi incidunt suscipit dolorum,
            officia saepe soluta. Officiis ab quo necessitatibus consequatur!
            Inventore eaque numquam dolore libero, facere quas magnam incidunt
            assumenda, quam a aperiam! Eius voluptate debitis quasi perspiciatis
            ea qui odit tempore?
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-[25ch] justify-stretch">
        <div className="flex place-content-center px-14 py-10 border-[20px] border-primary rounded-full w-full">
          <Image src={Partyleader} alt="Partileder" width={100} />
        </div>
        <span className="px-4">
          <span className="text-primary text-xl font-semibold">Quote:</span>{" "}
          {quote}
        </span>
      </div>
    </div>
  );
}
