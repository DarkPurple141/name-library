import { Node } from './node'

class Place extends Node {
    
    fortification: number
    garrison: {
        capacity: number,
        current: number
    }
    name: string
    owner: any

    constructor(name: string, fortification: number, capacity: number) {
        super()
        this.name = name
        this.fortification = fortification
        this.garrison = {
            capacity,
            current: 0
        }
    }
    
}

export default Place