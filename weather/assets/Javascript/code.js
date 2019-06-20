 // This is our API key
 var APIKey = "166a433c57516f51dfab1f7edaed8413";

 // Here we are building the URL we need to query the database
 
 
 
 $("#find-city").on("click", function (event) {
     
     event.preventDefault();
     
     var city = $("#city-input").val();            
     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+",Burundi&units=imperial&appid=" + APIKey;
   
 // Here we run our AJAX call to the OpenWeatherMap API
 $.ajax({
   url: queryURL,
   method: "GET"
 })
   // We store all of the retrieved data inside of an object called "response"
   .then(function(response) {

     // Log the queryURL
     console.log(queryURL);

     // Log the resulting object
     console.log(response);

     // Transfer content to HTML
     $(".city").html("<h1>" + response.name + " Weather Details</h1>");
     $(".wind").text("Wind Speed: " + response.wind.speed);
     $(".humidity").text("Humidity: " + response.main.humidity);
     $(".temp").text("Temperature (F) " + response.main.temp);
    $(".description").text("Description: " + response.weather[0].description);
     // Log the data in the console as well
     console.log("Wind Speed: " + response.wind.speed);
     console.log("Humidity: " + response.main.humidity);
     console.log("Temperature (F): " + response.main.temp);
   });
});