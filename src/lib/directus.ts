import { readItems, createDirectus, rest } from "@directus/sdk";

const directus = createDirectus("http://localhost:8055").with(rest());

export default directus;

export async function getProgram() {
  const fetchedProgram = await directus.request(
    readItems("program", {
      fields: ["tid", "hendelse", "id"],
      sort: "tid",
    })
  );

  return fetchedProgram.map((item) => ({
    id: item.id,
    time: new Date(item.tid),
    description: item.hendelse,
  }));
}
