$("#find-flight").on("click", function (event) {

    event.preventDefault();

    var flightFrom = $("#flight-input1").val();            
    var flightTo = $("#flight-input2").val();
    var flightDateFrom = $("#flight-dateInput1").val();
    var flightDateTo = $("#flight-dateInput2").val();

    var cabinClass = $("#cabin-input1").val().toLowerCase().charAt(0);
    var cabinClass = $("#cabin-input2").val().toLowerCase().charAt(0);
    var cabinClass = $("#cabin-input3").val().toLowerCase().charAt(0);
    var cabinClass = $("#cabin-input4").val().toLowerCase().charAt(0);

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
                
                if(cabinClass === "e") {
                    $(".ClassIs").text("Class: Economy");
                }
                else if(cabinClass === "p") {
                    $(".ClassIs").text("Class: Premium Economy");
                }
                else if(cabinClass === "b") {
                    $(".ClassIs").text("Class: Business");
                }
                else if(cabinClass === "f") {
                    $(".ClassIs").text("Class: First");
                }
                
                $(".trip1").text("Trip 1: " + response.tripset[0].cheapestProviderName + " " + response.tripset[0].displayLow);
                
                if(response.tripset[0].cheapestProviderName === "Delta") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/DL.png")
                }
                else if(response.tripset[0].cheapestProviderName === "Alaska Airlines") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AS.png")
                }
                else if(response.tripset[0].cheapestProviderName === "United Airlines") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/UA.png")
                }
                else if(response.tripset[0].cheapestProviderName === "American Airlines") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AA.png")
                }
                else if(response.tripset[0].cheapestProviderName === "Spirit Airlines") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/NK.png")
                }
                else if(response.tripset[0].cheapestProviderName === "Frontier") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/F9.png")
                }
                else if(response.tripset[0].cheapestProviderName === "Southwest") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/WN.png")
                }
                else if(response.tripset[0].cheapestProviderName === "JetBlue") {
                    $("#img1").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/B6.png")
                }
                else {
                    $("#img1").attr('src',"")
                }
                $("#link1").attr('href', "https://www.kayak.com/"+response.tripset[0].shareURL);
                
                $(".trip2").text("Trip 2: "+ response.tripset[1].cheapestProviderName + " " + response.tripset[1].displayLow);

                if(response.tripset[1].cheapestProviderName === "Delta") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/DL.png")
                }
                else if(response.tripset[1].cheapestProviderName === "Alaska Airlines") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AS.png")
                }
                else if(response.tripset[1].cheapestProviderName === "United Airlines") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/UA.png")
                }
                else if(response.tripset[1].cheapestProviderName === "American Airlines") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AA.png")
                }
                else if(response.tripset[1].cheapestProviderName === "Spirit Airlines") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/NK.png")
                }
                else if(response.tripset[1].cheapestProviderName === "Frontier") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/F9.png")
                }
                else if(response.tripset[1].cheapestProviderName === "Southwest") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/WN.png")
                }
                else if(response.tripset[1].cheapestProviderName === "JetBlue") {
                    $("#img2").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/B6.png")
                }
                else {
                    $("#img2").attr('src',"")
                }
                $("#link2").attr('href', "https://www.kayak.com/"+response.tripset[1].shareURL);

                $(".trip3").text("Trip 3: "+ response.tripset[2].cheapestProviderName + " " + response.tripset[2].displayLow);

                if(response.tripset[2].cheapestProviderName === "Delta") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/DL.png")
                }
                else if(response.tripset[2].cheapestProviderName === "Alaska Airlines") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AS.png")

                }
                else if(response.tripset[2].cheapestProviderName === "United Airlines") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/UA.png")

                }
                else if(response.tripset[2].cheapestProviderName === "American Airlines") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AA.png")

                }
                else if(response.tripset[2].cheapestProviderName === "Spirit Airlines") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/NK.png")

                }
                else if(response.tripset[2].cheapestProviderName === "Frontier") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/F9.png")

                }
                else if(response.tripset[2].cheapestProviderName === "Southwest") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/WN.png")

                }
                else if(response.tripset[2].cheapestProviderName === "JetBlue") {
                    $("#img3").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/B6.png")

                }
                else {
                    $("#img3").attr('src',"")
                }
                $("#link3").attr('href', "https://www.kayak.com/"+response.tripset[2].shareURL);

                $(".trip4").text("Trip 4: "+ response.tripset[3].cheapestProviderName + " " + response.tripset[3].displayLow);

                if(response.tripset[3].cheapestProviderName === "Delta") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/DL.png")
                }
                else if(response.tripset[3].cheapestProviderName === "Alaska Airlines") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AS.png")

                }
                else if(response.tripset[3].cheapestProviderName === "United Airlines") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/UA.png")
                }
                else if(response.tripset[3].cheapestProviderName === "American Airlines") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AA.png")
                }
                else if(response.tripset[3].cheapestProviderName === "Spirit Airlines") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/NK.png")
                }
                else if(response.tripset[3].cheapestProviderName === "Frontier") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/F9.png")
                }
                else if(response.tripset[3].cheapestProviderName === "Southwest") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/WN.png")
                }
                else if(response.tripset[3].cheapestProviderName === "JetBlue") {
                    $("#img4").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/B6.png")
                }
                else {
                    $("#img4").attr('src',"")
                }
                $("#link4").attr('href', "https://www.kayak.com/"+response.tripset[3].shareURL);

                $(".trip5").text("Trip 5: "+ response.tripset[4].cheapestProviderName + " " + response.tripset[4].displayLow);
                
                if(response.tripset[4].cheapestProviderName === "Delta") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/DL.png")
                }
                else if(response.tripset[4].cheapestProviderName === "Alaska Airlines") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AS.png")
                }
                else if(response.tripset[4].cheapestProviderName === "United Airlines") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/UA.png")
                }
                else if(response.tripset[4].cheapestProviderName === "American Airlines") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AA.png")
                }
                else if(response.tripset[4].cheapestProviderName === "Spirit Airlines") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/NK.png")
                }
                else if(response.tripset[4].cheapestProviderName === "Frontier") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/F9.png")
                }
                else if(response.tripset[4].cheapestProviderName === "Southwest") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/WN.png")
                }
                else if(response.tripset[4].cheapestProviderName === "JetBlue") {
                    $("#img5").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/B6.png")
                }
                else {
                    $("#img5").attr('src',"")
                }
                $("#link5").attr('href', "https://www.kayak.com/"+response.tripset[4].shareURL);

                $(".trip6").text("Trip 6: "+ response.tripset[5].cheapestProviderName + " " + response.tripset[5].displayLow);
              
                if(response.tripset[5].cheapestProviderName === "Delta") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/DL.png")
                }
                else if(response.tripset[5].cheapestProviderName === "Alaska Airlines") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AS.png")
                }
                else if(response.tripset[5].cheapestProviderName === "United Airlines") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/UA.png")
                }
                else if(response.tripset[5].cheapestProviderName === "American Airlines") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/AA.png")
                }
                else if(response.tripset[5].cheapestProviderName === "Spirit Airlines") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/NK.png")
                }
                else if(response.tripset[5].cheapestProviderName === "Frontier") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/F9.png")
                }
                else if(response.tripset[5].cheapestProviderName === "Southwest") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/WN.png")
                }
                else if(response.tripset[5].cheapestProviderName === "JetBlue") {
                    $("#img6").attr('src',"https://www.gstatic.com/flights/airline_logos/70px/B6.png")
                }
                else {
                    $("#img6").attr('src',"")
                }
                $("#link6").attr('href', "https://www.kayak.com/"+response.tripset[5].shareURL);

                // console.log(response.tripset[0]);
            });
});
