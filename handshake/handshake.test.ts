import { describe, expect, test } from '@jest/globals'
import { calcHandshakesForTenPerson } from "./handshake" 

describe('calcHandshakesForTenPerson', () => {
    test('calculate number of handshakes for 10 person in 1 room', () => {
        expect(calcHandshakesForTenPerson()).toEqual(45)
    })
})