// console.log(process)
// console.log(process.env)
// console.log(process.env.PORT ?? 3000)

const { TEMP, PROCESSOR_ARCHITECTURE } = process.env
// console.table({TEMP, PROCESSOR_ARCHITECTURE})

export const characters: string[] = ['Flash', 'Superman', 'Batman']
const [ superhero1, , superhero3 ] = characters
// console.log({ superhero1, superhero3 })