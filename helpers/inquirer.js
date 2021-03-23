const inquirer = require('inquirer')
require('colors')

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Seleccione una opción',
        choices: ['opt1', 'opt2']
    }
]


const inquirerMenu = async () => {
    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.green);
    console.log('==========================\n'.green);

    const opt = await inquirer.prompt(questions)

    return opt 
}

module.exports = {
    inquirerMenu
}