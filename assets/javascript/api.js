$(“#search-button”).on(“click”, function() {

     //
      var queryURL = “https://api.nytimes.com/svc/search/v2/articlesearch.json“;
      queryURL += ‘?’ + $.param({
          ‘api-key’: “5f56b3bc35324cd0ae8eaa45ca05f432”
        });
      
     //
      $.ajax({
        url: queryURL,
        method: “GET”
      })

     //
      .done(function(response) {
          console.log(response);
        }).fail(function(err) {
          throw err;
    });