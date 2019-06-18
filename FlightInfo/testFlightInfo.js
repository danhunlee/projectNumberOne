$("#find-flight").on("click", function (event) {

    event.preventDefault();

    var flightFrom = $("#flight-input1").val();            
    var flightTo = $("#flight-input2").val();
    var flightDateFrom = $("#flight-dateInput1").val();
    var flightDateTo = $("#flight-dateInput2").val();
    var cabinClass = $("#cabin-input").val();
    // console.log(cabinClass);

        var queryURL ="https://apidojo-kayak-v1.p.rapidapi.com/flights/create-session?origin1="+flightFrom+"&destination1="+flightTo+"&departdate1="+flightDateFrom+"&cabin="+cabinClass+"&currency=USD&adults=1&bags=0";
        
        
        $.ajax({
            url: queryURL,                    
            method: "GET",
            headers: {'X-RapidAPI-Key': "38fac222b8msh31da82ee45df637p1e6440jsn2276206f519d",
            },
            }).then(function (response) {
                console.log(response);
                $(".Depart").text("Depart: " + flightFrom + " " + flightDateFrom);
                $(".Return").text("Return: "+ flightTo + " " + flightDateTo);
                // $(".cheapestAirline").text("Airline: " + response.tripset[0].cheapestProviderName);
                $(".cheapestPrice").text("Cheapest Price: $" + response.cheapestPrice);
                $(".logos").text(JSON.stringify(response.airlineLogos.AA));
                $(".trip1").text("Trip 1: "+ response.tripset[0].cheapestProviderName + " " + response.tripset[0].displayLow);
                $(".trip2").text("Trip 2: "+ response.tripset[1].cheapestProviderName + " " + response.tripset[1].displayLow);

                console.log(response.tripset[0]);
            });
});
