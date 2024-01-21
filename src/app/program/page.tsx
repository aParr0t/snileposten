export default function Program() {
  const start = "08:00";
  const end = "13:00";
  const program = [
    {
      time: "08:00",
      description:
        "Dørene åpner. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      time: "09:00",
      description:
        "Åpningsseremoni. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      time: "10:00",
      description:
        "Komiteene starter. lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      time: "11:00",
      description:
        "Lunsj. lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      time: "12:00",
      description: "Komiteene fortsetter",
    },
  ];

  return (
    <div className="absolute h-full w-full overflow-y-hidden">
      <div className="flex flex-row text-xl">
        <span className="relative bg-primary min-w-[30vw] text-right text-white pr-14 pt-4   after:absolute after:w-[40px] after:h-[8px] after:bottom-0 after:right-0 after:translate-x-[50%] after:bg-black">
          Start
        </span>
        <span className="max-w-[50ch] mb-4 pl-6 pt-4">{start}</span>
      </div>
      <ul className="">
        {program.map((item, idx) => {
          let { time, description } = item;
          return (
            <li key={item.time} className="flex flex-row">
              <span className="relative bg-primary min-w-[30vw] text-right text-white pr-6 after:absolute after:w-[8px] after:h-full after:bottom-0 after:right-0 after:translate-x-[50%] after:bg-black">
                {time}
              </span>
              <span className="max-w-[50ch] pl-6 mb-4">{description}</span>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row h-full text-xl">
        <span className="relative pt-4 bg-primary min-w-[30vw] text-right text-white pr-14 after:absolute after:w-[40px] after:h-[8px] after:top-0 after:right-0 after:translate-x-[50%] after:bg-black">
          Slutt
        </span>
        <span className="max-w-[50ch] mb-4 pl-6 pt-4">{end}</span>
      </div>
    </div>
  );
}
