import { describe, expect, test } from '@jest/globals'
import { distinct } from './distinct' 

describe('calcHandshakesForTenPerson', () => {
    test('calculate number of handshakes for 10 person in 1 room', () => {
        expect(distinct('cat,dog,human,cat,human,dog,cow,cow,owl')).toEqual('cat,dog,human,cow,owl')
    })
})