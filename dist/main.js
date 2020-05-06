const renderer = new Renderer()

const show = function () {
  const input = $('#input-ingredient').val()
  $.get(`recipes/${input}`, function (allRecipes) {
    renderer.render({ allRecipes })
  })
}


// $('.photo').on('click', function () {
//   const firsIngr = $(this).closest(".ingredients")
//   console.log(firsIngr)
// })