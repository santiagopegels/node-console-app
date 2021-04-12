require('colors')

const { 
   inquirerMenu, 
   pause, 
   readInput 
} = require('./helpers/inquirer')
const Tasks = require('./models/tasks')
const {saveDB, readDB} = require('./helpers/fileManager')

const main = async () => {
   let opt = ''
   const tasks = new Tasks()

   const tasksDB = readDB()

   if (tasksDB) {
      tasks.loadTasksFromArray(tasksDB)
   }


   do {
      opt = await inquirerMenu()

      switch (opt) {
         case '1':
            const description = await readInput('Descripción:')
            tasks.createTask(description)
            break;
         case '2':
            tasks.completeTasksList()
            break;
      }

      await pause();
      saveDB( tasks.tasksListArray )


   } while (opt != 0)

}

main()