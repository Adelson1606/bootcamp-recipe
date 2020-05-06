const renderer = new Renderer()

const show = function () {
  const input = $('#input-ingredient').val().toLowerCase()
  $.get(`recipes/${input}`, function (results) {
    renderer.render(results)  
  })
}

$('.results').on('click', '.photo', function () {
  console.log('clicked photo')
  const firsIngr = $(this).closest(".recipe-container").find('li').first().text()
  console.log(firsIngr)
})
