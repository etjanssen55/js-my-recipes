const router = require('express').Router()


router.get('/', async (request, response) => {
    const recipes = require('../../../data/recipes.json')
    
    const recipeSummary = recipes.map(recipe => {
        return {id, title, image, prepTime, difficulty}
    })
    
    response.send(recipeSummary)
})

router.get('/recipe/:id', async (request, response) => {
    const recipes = require('../../../data/recipes.json')

    const match = ({ id }) => id === `${id}`

    const recipeId = recipes.find(match)

    response.send(recipeId[{ id }])
})

router.post('/recipe/add', async (request, response) => {
    const recipes = require('../../../data/recipes.json')

    const newId = id + 1
    
    const { id, title, image, ingredients, instructions, prepTime, difficulty } = request.body
    

    response.send(recipes[{ id: newId, title, image, ingredients, instructions, prepTime, difficulty }])
})