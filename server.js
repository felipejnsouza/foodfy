const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.listen(3000,() => console.log("Foodfy server is alive!"))

server.get('/', (require, response) => response.render('home'))

server.get('/about', (require, response) => response.render('about'))

server.get('/recipes', (require, response) => {
    
    response.render('recipes', {dishes: data})
})

server.get('/recipe', (require, response) => {
    
    const id = require.query.id

    const dish = data.find((dish)=> dish.title == id)
    
    
    if(!dish){return response.send("dish not found!")}
    
    return response.render("recipe", {dishes: dish})
   

})