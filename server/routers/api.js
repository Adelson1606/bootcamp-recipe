const express = require('express')
const urllib = require('urllib')
const router = express.Router()

router.get('/sanity', function (request, response) {
  response.send("OK")
})

router.get('/recipes/:ingredient', function (req, res) {
  const ingredient = req.params.ingredient
  urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`)
    .then(function (data) {

      const recipes = JSON.parse(data.data.toString()).results

      const results = recipes.map(recipe => ({
        title: recipe.title,
        thumbnail: recipe.thumbnail,
        href: recipe.href,
        ingredients: recipe.ingredients
      }))

      res.send(results) //arr
    })
    .catch(function (err) {
      console.error(err)
      res.send('ERROR ERROR ERROR!')  
    })


})

module.exports = router