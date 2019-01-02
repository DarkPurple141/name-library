import Place from './place'
import { randomItem, randomIndex } from '../utils';


export default class GameMap {

    places: Place[]

    constructor(placeNames: string[]) {
        this.places = placeNames.map(name =>
            new Place(name, 10, 10)
        )
        this.places.forEach((place, index) => {
            place.addConnection(
                randomItem(this.places), randomIndex(this.places))
        })
    }

    getRoute(from: Place, to: Place): void {}
}