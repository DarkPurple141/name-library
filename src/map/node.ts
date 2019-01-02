export abstract class Node {
    protected neighbours: Node[]
    protected edgeWeights: Map<Node, number>

    constructor() {
        this.neighbours = new Array<Node>()
        this.edgeWeights = new Map<Node, number>()
    }
    
    addConnection(other: Node, edgeWeight: number): void {
        if (!this.isDirectConnection(other)) {
            this.neighbours.push(other)
            this.edgeWeights.set(other, edgeWeight)
        }
    }

    isDirectConnection(other: Node): boolean {
        return this.neighbours.indexOf(other) !== -1
    }

    travelCost(other: Node): number {
        return this.edgeWeights.get(other) 
    }

}
