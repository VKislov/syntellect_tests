const { log } = require("console")

class Turtle {
    #currentPos = 0
    nightShiftLength = -30
    dailyShiftLength = 50

    constructor(nightShiftLength, dailyShiftLength) {
        nightShiftLength && (this.nightShiftLength = nightShiftLength)
        dailyShiftLength && (this.dailyShiftLength = dailyShiftLength)
    }
    get currentPos () {
        return this.#currentPos
    }
    set currentPos (position) {
        if (position < 0) throw new Error ('Position cannot be negative')
        this.#currentPos = position
    }

    _move (shiftLength) {
        return this.currentPos = this.#currentPos + shiftLength
    }
}

class TurtleLife extends Turtle {
    pathLength = 100
    dayCounter = 1

    constructor(pathLength, nightShiftLength, dailyShiftLength) {
        super(nightShiftLength, dailyShiftLength)
        if (nightShiftLength >= dailyShiftLength) throw new Error('dailyShiftLength must be greater than nightShiftLength')
        pathLength && (this.pathLength = pathLength)
    }

    #daySimulation () {
        this._move(this.dailyShiftLength)
    }

    #nightSimulation () {
        this._move(this.nightShiftLength)
    }

    moveToDestination () {
        this.dayCounter = 1
        for (this.dayCounter; this.currentPos < this.pathLength; this.dayCounter++) {
            this.#daySimulation()
            if (this.currentPos >= this.pathLength) break 
            this.#nightSimulation()
        }
        return this.dayCounter
    }
}

module.exports = {
    TurtleLife,
}