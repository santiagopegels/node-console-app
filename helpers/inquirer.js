const inquirer = require('inquirer')
require('colors')

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tareas'
            },
            {
                value: '6',
                name: '4. Eliminar Tarea '
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]


const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(questions)

    return opcion 
}

const pause = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ]

    await inquirer.prompt(question)
}

const readInput = async ( message ) => {

    const question = [
        {
            name: 'description',
            type: 'input',
            message,
            validate( value ){
                if( value.length === 0){
                    return 'Ingrese un valor';
                }
                return true
            }
        }
    ]

    const {description} = await inquirer.prompt(question)

    return description
}

module.exports = {
    inquirerMenu,
    pause,
    readInput
}