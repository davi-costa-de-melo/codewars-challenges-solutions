// https://www.codewars.com/kata/520b9d2ad5c005041100000f

export function pig(text: string) {
  const wordRegex = /[a-zA-Z]+/g

  const result = text.replaceAll(wordRegex, (word) => {
    return `${word.slice(1)}${word[0]}ay`
  })

  return result
}
