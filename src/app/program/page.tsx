import { getProgram, Program } from "@/lib/directus";

export const revalidate = 120;

export default async function Program() {
  const program = await getProgram();

  return (
    <div className="h-full w-full overflow-y-hidden flex flex-col md:flex-row items-stretch">
      {program.map((day) => (
        <Timeline key={day.id} name={day.name} items={day.events} />
      ))}
    </div>
  );
}

type item = {
  time: string;
  event: string;
};
function Timeline({ name, items }: { name: string; items: item[] }) {
  const leftWidth = "min-w-[25vw] max-w-[25vw]";

  const borderClass = "border-r-[8px] border-primary";

  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-xl">
        <span
          className={`${leftWidth} text-right font-bold text-primary pr-2 pt-4 pb-8 break-words text-wrap ${borderClass}`}
        >
          {name}
        </span>
      </div>
      <ul>
        {items.map(({ time, event }) => (
          <li key={event} className="flex flex-row text-base lg:text-lg">
            <span
              className={`${leftWidth} text-right text-secondary font-bold pr-6 ${borderClass}`}
            >
              {/* {time} */}
              {formatDate(time)}
            </span>
            <div className="max-w-[40ch] mb-4 flex flex-row gap-2">
              <span className="w-[16px] h-[8px] bg-primary self-center"></span>
              <span className="text-primary font-bold">{event}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex flex-row flex-1">
        <span
          className={`${leftWidth} text-right font-bold text-primary pr-2 ${borderClass}`}
        ></span>
      </div>
    </div>
  );
}

function formatDate(time: string | undefined) {
  if (!time) return "";

  // given hh:mm:ss remove :ss
  return time.slice(0, -3);
}
