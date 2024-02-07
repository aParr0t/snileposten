import { readItems, createDirectus, rest } from "@directus/sdk";

const baseUrl = process.env.API_URL || "http://localhost:8055";
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
    logo: getImage(party.partilogo),
    portrait: getImage(party.portrett),
    quote: party.quote,
    color: party.farge,
    video: party.videointervju ? getImage(party.videointervju) : null,
  };
}

export function getImage(id: string) {
  const imageUrl = `${baseUrl}/assets/${id}`;
  return imageUrl;
}

export async function getArticles() {
  const fetchedArticles = await directus.request(
    readItems("artikler", {
      sort: "-date_created",
    })
  );
  return fetchedArticles.map(articleReducer);
}

export const articleReducer = (article: any) => ({
  id: article.id,
  title: article.tittel,
  content: article.innhold,
  thumbnail: getImage(article.thumbnail),
  date: article.date_created,
  status: article.status,
  categories: article.kategori as string[],
});

export async function getArticle(id: number) {
  const fetchedArticles = await directus.request(
    readItems("artikler", {
      filter: {
        id: {
          _eq: id,
        },
      },
    })
  );
  return fetchedArticles.map(articleReducer)[0];
}

export type Article = ReturnType<typeof articleReducer>;

export async function getArticleCategories() {
  const fertchedArticles = await getArticles();
  // return all unique categories
  return [
    ...new Set(fertchedArticles.map((article) => article.categories).flat(1)),
  ];
}

export type Category = string;
