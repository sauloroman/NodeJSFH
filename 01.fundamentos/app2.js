const fs = require('fs')

const fileContent = fs.readFileSync('README.md', 'utf-8')

const newContent = fileContent.replace(/React/ig, 'Angular')

fs.writeFileSync('README-Angular.md', newContent )
