const renderer = new Renderer()

const show = function () {
  const input = $('#input-ingredient').val()
  $.get(`recipes/${input}`, function (allRecipes) {
    renderer.render({ allRecipes })
  })
}