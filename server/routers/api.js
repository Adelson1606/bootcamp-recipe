const express = require('express')
const urllib = require('urllib')
const router = express.Router()

router.get('/sanity', function (request, response) {
  response.send("OK")
})

router.get('/recipes/:ingredient', function (req, res) {
  const ingredient = req.params.ingredient
  urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (_err, data) {
    const recipes = JSON.parse(data.toString()).results
    const results = recipes.map(recipe => ({
      title: recipe.title,
      thumbnail: recipe.thumbnail,
      href: recipe.href,
      ingredients: recipe.ingredients
    }))
    res.send(results) 
  }) 
  
})

module.exports = router