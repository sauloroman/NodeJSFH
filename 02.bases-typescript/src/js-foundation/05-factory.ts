import { getAge, getID } from '../plugins'
import { buildMakePerson } from './05-factory-adapter'

const makePerson = buildMakePerson({ getID, getAge })

const obj = { name: 'Roman', birthdate: '1998-12-08'}
const roman = makePerson( obj )
console.table(roman)