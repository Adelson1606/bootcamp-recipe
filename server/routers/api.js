const express = require('express')
const urllib = require('urllib')
const router = express.Router()

router.get('/sanity', function (request, response) {
  response.send("OK")
})

router.get('/recipes/:ingredient', function (req, res) {
  const ingredient = req.params.ingredient
  urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (_err, data) {
    console.log(data.toString())
  }) 
  res.send('take data')
})

module.exports = router