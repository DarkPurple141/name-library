import types from './place-types'
import names from './places'
import {randomItem} from '../../utils'

function generatePlace(name: string, placeType?: string): string {
    return placeType
        ? `${name} ${placeType}`
        : `${name}`
}

export default class PlaceFactory {
    private placeNames = names
    private placeTypes = types

    generatePlace(): string {
        const seed = Math.random()

        return seed > 0.5
            ? generatePlace(
                randomItem(this.placeNames),
                randomItem(this.placeTypes)
            )
            : generatePlace(
                randomItem(this.placeNames)
            )
    }
}
