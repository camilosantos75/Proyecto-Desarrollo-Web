$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var category = $('#category').val();
    var url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category;

    $.getJSON(url, function(data) {
      var meals = data.meals;
      var htmlColumn1 = '';
      var htmlColumn2 = '';

      if (meals) {
        for (var i = 0; i < meals.length; i++) {
          var meal = meals[i];
          var html = '<div class="card mb-3" style="margin-bottom: 20px !important"><img class="card-img-top" src="' + 
                      meal.strMealThumb +
                      '"><div class="card-body"><h5 class="card-title">' +
                      meal.strMeal +
                      '</h5><p class="card-text">' + '</p></div></div>';

          if (i % 2 == 0) {
            htmlColumn1 += html;
          } else {
            htmlColumn2 += html;
          }

        }
      } else {
        htmlColumn1 = '<p>No se encontraron alimentos en la categoría seleccionada</p>';
      }

      $('#meals-column-1').html(htmlColumn1);
      $('#meals-column-2').html(htmlColumn2);
    });
  });
});
