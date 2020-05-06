const source = $('#template').html()
const template = Handlebars.compile(source)

const show = function () {
  const input = $('#input-ingredient').val()

  $.get(`recipes/${input}`, function (allRecipes) {
    $('.results').empty()
    const newHTML = template({ allRecipes })
    $('.results').append(newHTML)
  })
}