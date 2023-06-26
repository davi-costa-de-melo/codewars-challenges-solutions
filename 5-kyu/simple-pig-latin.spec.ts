// https://www.codewars.com/kata/520b9d2ad5c005041100000f

import { describe, it, expect } from 'vitest'
import { translateToPigLatin } from './simple-pig-latin'

describe('Simple Pig Latin', () => {
  it('should be able to move the first letter of each word to the end of it and add "ay" to the end of the word', () => {
    expect(translateToPigLatin('Pig latin is cool')).toEqual(
      'igPay atinlay siay oolcay',
    )
    expect(translateToPigLatin('Hello, world!')).toEqual('elloHay, orldway!')
  })
})
