import { findHeroById } from "./services/hero.service"

const hero = findHeroById(1)

console.log('Id', hero?.id ) 
console.log('Nombre', hero?.name ) 
console.log('Propietario', hero?.owner )