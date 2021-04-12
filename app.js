require('colors')

const {
   inquirerMenu,
   pause,
   readInput,
   deleteTasksList,
   confirmQuestion,
   checklistTasks
} = require('./helpers/inquirer')
const Tasks = require('./models/tasks')
const { saveDB, readDB } = require('./helpers/fileManager')

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
         case '3': //List Complete Tasks
            tasks.completeOrPendingTasksList(true)
            break;
         case '4': //List Pending Tasks
            tasks.completeOrPendingTasksList(false)
            break;
         case '5':
            const ids = await checklistTasks(tasks.tasksListArray)
            tasks.toggleStatusTasks(ids)
            break;
         case '6':
            const id = await deleteTasksList(tasks.tasksListArray)
            if (id !== '0') {
               const ok = await confirmQuestion('Está Seguro?')
               if (ok) {
                  tasks.deleteTask(id)
                  console.log('Tarea Borrada')
               }
            }
            break;
      }

      await pause();
      saveDB(tasks.tasksListArray)


   } while (opt != 0)

}

main()