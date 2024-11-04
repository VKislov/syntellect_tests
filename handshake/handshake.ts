interface IPerson {
    personsHandshakesCounter: number
    greatingsAll: (room: IRoom) => void
}

interface IRoom {
    handshakesCounter: number
    personsInsideCounter: number
    increasePersonInside: () => number
}


export class Room implements IRoom {
    #personInsideCounter = 0
    #handshakesCounter = 0

    get personsInsideCounter () {
        return this.#personInsideCounter
    }
    
    increasePersonInside () {
        return this.#personInsideCounter++
    }

    get handshakesCounter () {
        return this.#handshakesCounter
    }

    set handshakesCounter (value: number) {
        this.#handshakesCounter = value
    }
}

export class Person implements IPerson {
    personsHandshakesCounter = 0

    greatingsAll (room: IRoom) {        
        this.personsHandshakesCounter = room.personsInsideCounter
        room.handshakesCounter = room.handshakesCounter + this.personsHandshakesCounter
        room.increasePersonInside()
    }

}

export function calcHandshakesForTenPerson (numberOfPerson = 10) {
    const room = new Room()
    let enteredPersonsCounter = 0
    
    while (enteredPersonsCounter < numberOfPerson) {
        const person = new Person()
        person.greatingsAll(room)
        
        enteredPersonsCounter++
    }
    return room.handshakesCounter
}
