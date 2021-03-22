require('colors')
const {showMenu, pause} = require('./helpers/messages')

const main = async () => {
   let opt = ''

   do {
      opt = await showMenu()
      await pause()
   } while (opt != 0)
   
}

main()