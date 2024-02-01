import { getProgram } from "@/lib/directus";
import Image from "next/image";

import Program1 from "/public/static/images/program 1.jpg";
import Program2 from "/public/static/images/program 2.jpg";

export default async function Program() {
  const fetchedProgram = await getProgram();
  const program = fetchedProgram.slice(1, fetchedProgram.length - 1);
  const start = formatDate(fetchedProgram[0].time);
  const end = formatDate(fetchedProgram[fetchedProgram.length - 1].time);

  const leftWidth = "min-w-[25vw]";
  const afterClass = "after:right-0 after:translate-x-[50%] after:bg-black";

  const imageClass = "rounded-full aspect-square object-cover";
  return (
    <div className="h-full w-full overflow-y-hidden flex flex-row items-stretch">
      <div className="flex flex-col h-full font-serif justify-stretch">
        <div className="flex flex-row text-xl">
          <span
            className={`relative bg-secondary-light ${leftWidth} text-right font-semibold text-black pr-2 md:pr-14 pt-4   after:absolute after:w-[40px] after:h-[8px] after:bottom-0 ${afterClass}`}
          >
            Start
          </span>
          <span className="font-semibold max-w-[50ch] mb-4 pl-6 pt-4">
            {start}
          </span>
        </div>
        <ul>
          {program.map((item) => {
            let { time, description } = item;
            return (
              <li
                key={item.id}
                className="flex flex-row text-base lg:text-base"
              >
                <span
                  className={`relative bg-secondary-light ${leftWidth} text-right text-black pr-6 after:absolute after:w-[8px] after:h-full after:bottom-0 ${afterClass}`}
                >
                  {formatDate(time)}
                </span>
                <span className="max-w-[40ch] pl-6 mb-4">{description}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-row h-full text-xl">
          <span
            className={`relative pt-4 bg-secondary-light ${leftWidth} text-right font-semibold text-black pr-2 md:pr-14 after:absolute after:w-[40px] after:h-[8px] after:top-0 ${afterClass}`}
          >
            Slutt
            <div className="absolute w-full bg-secondary-light h-screen"></div>
          </span>
          <span className="font-semibold max-w-[50ch] mb-4 pl-6 pt-4">
            {end}
          </span>
        </div>
      </div>
      <div className="flex-col p-10 gap-8 hidden md:flex">
        <Image
          src={Program1}
          alt="production crew"
          width={600}
          height={600}
          className={`${imageClass} w-[220px]`}
        />
        <Image
          src={Program2}
          alt="production crew"
          width={400}
          height={400}
          className={`${imageClass} w-[150px] ml-[50px] lg:ml-[150px]`}
        />
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  const hhmmss = date.toTimeString().split(" ")[0];
  const hhmm = hhmmss.slice(0, 5);
  return hhmm;
}
