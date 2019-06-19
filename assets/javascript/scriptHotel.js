
$('document').ready(function () {
    console.log("loaded");
    var city = "";


    $('#search').on('click', function () {
        city = $('#autocomplete-input').val();
        console.log(city);
        city2 = city;

        var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=hotels&limit=50&location=" + city;

        $.ajax({
            url: myurl,
            headers: {
                'Authorization': 'Bearer 6flBRP1yMD5u16HPGPuEOMA8MXdt2Ed7uLC2xRq8jRFIbS6z2kks3WHoq6Us_V5LiNAv0qx_hzUgMMjinZBRyOD8OltnBgQRd1iE03f6gWgHeWtcT_AihtFdD9gHXXYx',
            },
            method: 'GET',
            dataType: 'json',
            success: function (data) {

                // Grab the results from the API JSON return
                var totalresults = data.total;
                // If our results are greater than 0, continue
                console.log(totalresults + "totalResults");
                console.log(data);



                if (totalresults > 0) {

                    $.each(data.businesses, function (i, item) {


                        $("#image-title" + parseInt(i + 1)).text(item.name);
                        // console.log(("#image-title"+parseInt(i+1)));

                        $("#img" + parseInt(i + 1)).attr('src', item.image_url);
                        $('#Price' + parseInt(i + 1)).text(item.price);
                        //console.log(item.location.display_address[0]+""+item.location.display_address[1]);
                        $('#Address' + parseInt(i + 1)).text(item.location.display_address[0] + "" + item.location.display_address[1]);


                        for (var i = 0; i < item.rating; i++) {
                            $("#star" + parseInt(i + 1)).attr('class', 'checked');
                        }


                      
                    });
                } else {
                    
                }
            }
        });

    })
    console.log(city2);

    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=hotels&limit=50&location=seattle";

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer 6flBRP1yMD5u16HPGPuEOMA8MXdt2Ed7uLC2xRq8jRFIbS6z2kks3WHoq6Us_V5LiNAv0qx_hzUgMMjinZBRyOD8OltnBgQRd1iE03f6gWgHeWtcT_AihtFdD9gHXXYx',
        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Grab the results from the API JSON return
            var totalresults = data.total;
            // If our results are greater than 0, continue
            console.log(totalresults + "totalResults");
            console.log(data);



            if (totalresults > 0) {

                $.each(data.businesses, function (i, item) {


                    $("#image-title" + parseInt(i + 1)).text(item.name);
                    // console.log(("#image-title"+parseInt(i+1)));

                    $("#img" + parseInt(i + 1)).attr('src', item.image_url);
                    $('#Price' + parseInt(i + 1)).text(item.price);
                    //console.log(item.location.display_address[0]+""+item.location.display_address[1]);
                    $('#Address' + parseInt(i + 1)).text(item.location.display_address[0] + "" + item.location.display_address[1]);


                    for (var i = 0; i < item.rating; i++) {
                        $("#star" + parseInt(i + 1)).attr('class', 'checked');
                    }


                   
                });
            } else {
                
            }
        }
    });




})