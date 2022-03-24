import words from "random-words";

export const generate = (count = 30) => {
  return new Array(count)
    .fill()
    .map(_ => words())
}