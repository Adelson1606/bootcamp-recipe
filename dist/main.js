const renderer = new Renderer()

const show = function () {
  const input = $('#input-ingredient').val()
  $.get(`recipes/${input}`, function (allRecipes) {
    renderer.render({ allRecipes })
    $('.photo').on('click', function () {
      console.log('clicked photo')
      const firsIngr = $(this).closest(".recipe-container").find('li').first().text()
      console.log(firsIngr)
    })
  })
  

}

