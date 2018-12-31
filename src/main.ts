import { peopleFactory, placeFactory } from './names'
import GameMap from './map'

class Game {

    map: GameMap

    constructor() {
        const nobles = []
        const places = []

        for (let i = 0; i < 10; i++) {
            const noble = peopleFactory.generateNoble()
            places.push(placeFactory.generatePlace())
            nobles.push(noble)
            console.log(noble.fullName)
        }

        this.map = new GameMap(places)
        console.log(this.map)
    }
}

new Game()