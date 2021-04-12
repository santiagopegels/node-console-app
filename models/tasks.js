const Task = require('./task')

class Tasks {

    _tasksList = {}

    get tasksListArray() {
        const tasksListArray = []
        Object.keys(this._tasksList).forEach(key => {
            const task = this._tasksList[key]
            tasksListArray.push(task)
        })
        return tasksListArray
    }

    constructor() {
        this._tasksList = {}
    }

    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._tasksList[task.id] = task
        })
    }

    createTask(description = '') {

        const task = new Task(description)

        this._tasksList[task.id] = task
    }

    deleteTask(id = '') {
        if(this._tasksList[id]){
            delete this._tasksList[id]
        }
    }

    completeTasksList() {
        this.tasksListArray.forEach((task, index) => {
            index = `${index + 1}`.green
            const { description, completeDate } = task
            const state = completeDate ? 'Completada'.green : 'Pendiente'.red

            console.log(`${index} ${description} :: ${state}`)
        })
    }

    completeOrPendingTasksList(complete = true) {
        let cont = 0
        this.tasksListArray.forEach(task => {

            const { description, completeDate } = task
            const state = completeDate ? 'Completada'.green : 'Pendiente'.red
            if (complete) {
                if (completeDate) {
                    cont += 1
                    console.log(`${cont.toString().green} ${description} :: ${state}`)
                }
            } else {
                if (!completeDate) {
                    cont += 1
                    console.log(`${cont.toString().red} ${description} :: ${state}`)
                }

            }
        })
    }
}

module.exports = Tasks