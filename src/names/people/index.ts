import Houses, {House} from './houses';
import Titles, {Title} from './titles';
import Names from './names';
import Gender from './gender';
import {randomItem} from '../../utils'

interface Name {
    house: House,
    title: Title,
    name: string
}

class Person {
    protected gender: Gender;
    protected self: Name;
    protected children: Person[];

    constructor(self: Name) {
        this.self = self;
    }

    get fullName(): string {
        return `${this.computedTitle} ${this.self.name} of house ${this.self.house}`
    }

    get computedTitle(): string {
        return this.gender === Gender.MALE
            ? this.self.title.male
            : this.self.title.female
    }

    get House(): House {
        return this.self.house
    }
}

class Man extends Person {
    private partner?: Woman;

    constructor(self: Name) {
        super(self);
        this.gender = Gender.MALE;
    }

    marry(partner: Woman): void {
        this.partner = partner
    }
}

class Woman extends Person {
    private partner?: Man;

    constructor(self: Name) {
        super(self);
        this.gender = Gender.FEMALE;
    }

    marry(partner: Man): void {
        this.partner = partner
    }
}

class PeopleFactory {
    private names = Names
    private titles = Titles
    private houses = Houses

    generateRandomName(gender: Gender) {
        return gender === Gender.MALE
            ? randomItem(this.names.MEN)
            : randomItem(this.names.WOMEN)
    }

    generateRandomTitle(): Title {
        return randomItem(this.titles.NOBLES)
    }

    generateRandomHouse(): House {
        return randomItem(this.houses)
    }

    generateMaleNoble(father?: Man): Man {
        const name = this.generateRandomName(Gender.MALE)

        return father
            ? new Man({
                name,
                house: father.House,
                title: Titles.NOBLES[4]
            })
            // fresh
            : new Man({
                name,
                title: this.generateRandomTitle(),
                house: this.generateRandomHouse()
            })
    }

    generateFemaleNoble(father?: Man): Woman {
        const name = this.generateRandomName(Gender.FEMALE)

        return father
            ? new Woman({
                name,
                house: father.House,
                title: Titles.NOBLES[4]
            })
            // fresh
            : new Woman({
                name,
                title: this.generateRandomTitle(),
                house: this.generateRandomHouse(),
            })                
    }

    generateNoble(father?: Man): Man | Woman {
        const seed = Math.random()

        return seed > 0.5
            ? this.generateMaleNoble(father)
            : this.generateFemaleNoble(father)
    }
}

export default PeopleFactory;