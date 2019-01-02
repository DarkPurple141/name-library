import { peopleFactory, placeFactory } from './names'
import events from './events'
import GameMap from './map'

/**
 * Lasts for n turns
 */
class Game {

    map: GameMap

    constructor() {
        const nobles = []
        const places = []

        for (let i = 0; i < 20; i++) {
            const noble = peopleFactory.generateNoble()
            places.push(placeFactory.generatePlace())
            nobles.push(noble)
            console.log(noble.fullName)
        }

        this.map = new GameMap(places)
        console.log(this.map)
    }
    
    // events for turn
    startTurn(): void {
        // all players act simultaneously -> resolve conflicts
    }

}

new Game()