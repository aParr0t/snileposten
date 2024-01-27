import { readItems, createDirectus, rest, readFile } from "@directus/sdk";

const baseUrl = "http://localhost:8055";
const directus = createDirectus(baseUrl).with(rest());

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

export async function getPartyNames() {
  const fetchedParties = await directus.request(
    readItems("partier", {
      fields: ["partinavn", "id", "forkortelse"],
    })
  );

  return fetchedParties.map((item) => ({
    id: item.id,
    name: item.partinavn,
    acronym: item.forkortelse,
  }));
}

export async function getParties() {
  const fetchedParties = await directus.request(readItems("partier"));

  return fetchedParties.map(partyReducer);
}

export async function getParty(name: string) {
  const fetchedParties = await directus.request(
    readItems("partier", {
      filter: {
        partinavn: {
          _eq: name,
        },
      },
    })
  );
  return fetchedParties.map(partyReducer)[0];
}

function partyReducer(party: any) {
  return {
    id: party.id,
    description: party.beskrivelse,
    leader: party.partileder,
    name: party.partinavn,
    logo: party.partilogo,
    portrait: party.portrett,
    quote: party.quote,
    color: party.farge,
  };
}

export async function getImage(id: string) {
  const imageUrl = `${baseUrl}/assets/${id}`;
  return imageUrl;
  const result = await directus.request(readFile(id));
  console.log(result);
  return result.data;
}
