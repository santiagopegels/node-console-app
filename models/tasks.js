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

    createTask( description = ''){
        
        const task = new Task(description)

        this._tasksList[task.id] = task
    }
}

module.exports = Tasks