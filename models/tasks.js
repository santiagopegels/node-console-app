const Task = require('./task')

class Tasks {

    _tasksList = {}

    get tasksListArray() {
        const tasksListArray = []
        Object.keys(this._tasksList).forEach( key => {
            const task = this._tasksList[key]
            tasksListArray.push(task)
        })
        return tasksListArray
    }

    constructor() {
        this._tasksList = {}
    }

    loadTasksFromArray( tasks = []){
        tasks.forEach( task => {
            this._tasksList[task.id] = task
        })
    }

    createTask( description = ''){
        
        const task = new Task(description)

        this._tasksList[task.id] = task
    }

    completeTasksList() {
        this.tasksListArray.forEach( (task, index) => {
            index = `${index + 1}`.green
            const {description, completeDate} = task
            const state = completeDate ? 'Completada'.green : 'Pendiente'.red 

            console.log(`${index} ${description} :: ${state}`)
        })
    }
}

module.exports = Tasks