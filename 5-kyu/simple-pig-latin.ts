// https://www.codewars.com/kata/520b9d2ad5c005041100000f

export function translateToPigLatin(text: string) {
  const wordsRegex = /([a-zA-Z])([a-zA-Z]+)/g

  const translatedText = text.replaceAll(wordsRegex, '$2$1ay')

  return translatedText
}
