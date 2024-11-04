import { TurtleLife } from './turtle'
import { describe, expect, test } from '@jest/globals'

describe('Turtle life', () => {
    test('default path length and variables of shifting', () => {
        const turtle = new TurtleLife(null, null, null)

        expect(turtle.moveToDestination()).toEqual(4)
    })

    test('500 path length and default variables of shifting', () => {
        const turtle = new TurtleLife(500, null, null)

        expect(turtle.moveToDestination()).toEqual(24)
    })

    test('default path length and nightShift, but dailyShift is 60', () => {
        const turtle = new TurtleLife(null, null, 60)

        expect(turtle.moveToDestination()).toEqual(3)
    })

    test('default path length and dailyShift, but nightShift is -20', () => {
        const turtle = new TurtleLife(null, -20, null)

        expect(turtle.moveToDestination()).toEqual(3)
    })

    test('dailyShift less or equal nightShift', () => {
        try {
            new TurtleLife(null, 70, 60)
        } catch (e) {
            expect(e.message).toEqual('dailyShiftLength must be greater than nightShiftLength')
        } 
    })
})