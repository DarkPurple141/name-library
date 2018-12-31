import Place from './place'

export default class GameMap {

    places: Place[]

    constructor(placeNames: string[]) {
        this.places = placeNames.map(name =>
            new Place(name, 10, 10)
        )
    }
}