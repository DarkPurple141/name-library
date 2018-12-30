const fs = require('fs')
const path = require('path')

const raw_places = [].concat(
    ...require('./raw-places.json')
        .map(names => names.split(',').map(name => name.trim()))
)
    .map(place => place
        // trailing commas, periods.
        .replace(/[\.\,]/, '')
        // St. prefixes don't really work
        .replace(/^St.*$/, '')
        // for alternate names
        .replace(/\(.+\)/, '')
        // for citations
        .replace(/\[\d+\]/, '')
    )
    .filter(Boolean)
    .map(name => name.trim())

const raw_castles = [].concat(
    ...require('./raw-castles.json')
        .map(string => string.split(' ')[0].trim())
)

fs.writeFile(path.join(__dirname, '../places.ts'), `export default ${JSON.stringify(Array.from(new Set([...raw_places, ...raw_castles])))}`, () => {
    console.log('done')
})
