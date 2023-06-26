// https://www.codewars.com/kata/520b9d2ad5c005041100000f

import { describe, it, expect } from 'vitest'
import { pig } from './simple-pig-latin'

describe('Simple Pig Latin', () => {
  it('should be able to move the first letter of each word to the end of it and add "ay" to the end of the word', () => {
    expect(pig('Pig latin is cool')).toEqual('igPay atinlay siay oolcay')

    expect(pig('Hello, world!')).toEqual('elloHay, orldway!')
  })
})
