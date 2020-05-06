const express = require('express')
// const urllib = require('urllib')
const router = express.Router()

router.get('/', function (request, response) {
  response.send("hello")
})

module.exports = router