export function formatDateddmmyy(date: string) {
  const dateObj = new Date(date);
  const formatedDate = dateObj.toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return formatedDate;
}
