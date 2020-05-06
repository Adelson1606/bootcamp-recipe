class Renderer {

  render (data) {
    $('.results').empty()
    if (data.allRecipes.length === 0) { 
      $('.error').append(`
        <div> wrong input! Try another request like: oil, cheese, tomato, etc.</div>
        `) 
    } else {
      const source = $('#template').html()
      const template = Handlebars.compile(source)
      const newHTML = template(data)
      $('.results').append(newHTML)
    }
  
  }
  
}