$("#find-flight").on("click", function (event) {

    event.preventDefault();

    var flightFrom = $("#flight-input1").val();            
    var flightTo = $("#flight-input2").val();
    var flightDateFrom = $("#flight-dateInput1").val();
    var flightDateTo = $("#flight-dateInput2").val();


        var queryURL ="https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" +
                        flightFrom + "-sky/" + flightTo + "-sky/"+flightDateFrom+"?inboundpartialdate="+flightDateTo+"";
        $.ajax({
            url: queryURL,                    
            method: "GET",
            headers: {'X-RapidAPI-Key': "38fac222b8msh31da82ee45df637p1e6440jsn2276206f519d",
            },
            }).then(function (response) {
                $("#flight-view").text(JSON.stringify(response));
            });
});