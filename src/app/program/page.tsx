import { getProgram } from "@/lib/directus";

export default async function Program() {
  const fetchedProgram = await getProgram();
  const program = fetchedProgram.slice(1, fetchedProgram.length - 1);
  const start = formatDate(fetchedProgram[0].time);
  const end = formatDate(fetchedProgram[fetchedProgram.length - 1].time);

  return (
    <div className="absolute h-full w-full overflow-y-hidden">
      <div className="flex flex-row text-xl">
        <span className="relative bg-secondary-light min-w-[30vw] text-right text-primary pr-14 pt-4   after:absolute after:w-[40px] after:h-[8px] after:bottom-0 after:right-0 after:translate-x-[50%] after:bg-primary">
          {/* Start */}
        </span>
        <span className="font-bold max-w-[50ch] mb-4 pl-6 pt-4">{start}</span>
      </div>
      <ul className="">
        {program.map((item, idx) => {
          let { time, description } = item;
          return (
            <li key={item.id} className="flex flex-row">
              <span className="relative bg-secondary-light min-w-[30vw] text-right text-primary pr-6 after:absolute after:w-[8px] after:h-full after:bottom-0 after:right-0 after:translate-x-[50%] after:bg-primary">
                {formatDate(time)}
              </span>
              <span className="max-w-[50ch] pl-6 mb-4">{description}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row h-full text-xl">
        <span className="relative pt-4 bg-secondary-light min-w-[30vw] text-right text-primary pr-14 after:absolute after:w-[40px] after:h-[8px] after:top-0 after:right-0 after:translate-x-[50%] after:bg-primary">
          {/* Slutt */}
        </span>
        <span className="font-bold max-w-[50ch] mb-4 pl-6 pt-4">{end}</span>
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  const hhmmss = date.toTimeString().split(" ")[0];
  const hhmm = hhmmss.slice(0, 5);
  return hhmm;
}
