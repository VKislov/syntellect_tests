import { describe, expect, test } from '@jest/globals'
import { distinct } from './distinct' 

describe('distinct', () => {
    test('use distinct to string with repetetive creature names', () => {
        expect(distinct('cat,dog,human,cat,human,dog,cow,cow,owl')).toEqual('cat,dog,human,cow,owl')
    })
})