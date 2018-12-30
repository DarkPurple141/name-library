import PersonFactory from './people'
import PlaceFactory from './places'

const peopleFactory = new PersonFactory()
const placeFactory = new PlaceFactory()
const nobles = []
const places = []

for (let i = 0; i < 10; i++) {
    const noble = peopleFactory.generateNoble()
    const place = placeFactory.generatePlace()
    nobles.push(noble)
    console.log(noble.fullName)
    console.log(place.fullName)
}

export default { PersonFactory, PlaceFactory }
