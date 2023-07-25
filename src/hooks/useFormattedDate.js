export default function formattedDate(dateString) {
  const apiDate = new Date(dateString);
  const newFormattedDate = apiDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return newFormattedDate;
}
