const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.listen(3000,() => console.log("Foodfy server is alive!"))

server.get('/', (require, response) => response.render('home'))

server.get('/about', (require, response) => response.render('about'))

server.get('/recipes', (require, response) => response.render('recipes'))