const fs = require('fs')

const saveDB = ( data ) => {
    const file = './db/data.json'
    console.log(data)
    fs.writeFileSync( file, JSON.stringify(data))
}

module.exports = {
    saveDB
}