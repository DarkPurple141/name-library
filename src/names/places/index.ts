import types from './place-types'
import names from './places'
import {randomItem} from '../../utils'

class Place {
    private name: string
    private placeType?: string

    constructor(name: string, placeType?: string) {
        this.name = name
        this.placeType = placeType
    }

    get fullName(): string {
        return this.placeType
            ? `${this.name} ${this.placeType}`
            : `${this.name}`
    }
}

export default class PlaceFactory {
    private placeNames = names
    private placeTypes = types

    generatePlace(): Place {
        const seed = Math.random()

        return seed > 0.5
            ? new Place(
                randomItem(this.placeNames),
                randomItem(this.placeTypes)
            )
            : new Place(
                randomItem(this.placeNames)
            )
    }
}
