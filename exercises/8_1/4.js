const substituiX = (str1, str2) => str1.replace('x', str2)

// console.log(substituiX('Tryber x i aqui!','olá uhuuuu'))

const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub']

const concatena = strRetornada => {
    skills.sort()
    const stringSkills =`
Minhas cinco principais habilidades são:
    *${skills.join(`
    *`)}
#goTrybe`
    return strRetornada.concat(stringSkills)
}

console.log(concatena('Trybe x aqui', 'uhuuu'))