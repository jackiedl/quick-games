import words from "random-words";

export const generate = (count = 10) => {
  return new Array(count)
    .fill()
    .map(_ => words())
    .join(" ");
}