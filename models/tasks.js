const Task = require('./task')

class Tasks {

    _tasksList = {}

    constructor() {
        this._tasksList = {}
    }

    createTask( description = ''){
        
        const task = new Task(description)
        
        this._tasksList[task.id] = task
    }
}

module.exports = Tasks