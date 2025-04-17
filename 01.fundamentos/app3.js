const fs = require('fs')

const fileContent = fs.readFileSync('README.md', 'utf-8')

const words = fileContent.split(' ')

const wordCount = words.length

// const reactWordCount = words.filter( word => word.toLowerCase().includes('react') ).length
const reactWordCount = fileContent.match(/react/gi ?? []).length

console.log('Palabras', wordCount)
console.log('Palabras React', reactWordCount)
