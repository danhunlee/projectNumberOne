var city="";
$('document').ready(function(){
    console.log("loaded");

    $('#search').on('click',function(){
        city=$('#autocomplete-input').val();
        console.log(city);
    })

    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=hotels&location=seattle&limit=50";

         $.ajax({
            url: myurl,
            headers: {
             'Authorization':'Bearer 6flBRP1yMD5u16HPGPuEOMA8MXdt2Ed7uLC2xRq8jRFIbS6z2kks3WHoq6Us_V5LiNAv0qx_hzUgMMjinZBRyOD8OltnBgQRd1iE03f6gWgHeWtcT_AihtFdD9gHXXYx',
         },
         method: 'GET',
         dataType: 'json',
         success: function(data){
             // Grab the results from the API JSON return
             var totalresults = data.total;
                          // If our results are greater than 0, continue
             console.log(totalresults+"totalResults");
             console.log(data);

             

             if (totalresults > 0){
                 
                 $.each(data.businesses, function(i, item) {
                     
                     
                     $("#image-title"+parseInt(i+1)).text(item.name);
                     // console.log(("#image-title"+parseInt(i+1)));

                    $("#img"+parseInt(i+1)).attr('src',item.image_url);  
                    $('#Price'+parseInt(i+1)).text(item.price);
                     //console.log(item.location.display_address[0]+""+item.location.display_address[1]);
                    $('#Address'+parseInt(i+1)).text(item.location.display_address[0]+""+item.location.display_address[1]);


                     for(var i=0;i<item.rating;i++){
                         $("#star"+parseInt(i+1)).attr('class','checked');
                     }


                     // Append our result into our page
                    // $('#results').append('<div id="' + id + '" style="margin-top:50px;margin-bottom:50px;"><img src="' + image + '" style="width:200px;height:150px;"><br>We found <b>' + name + '</b> (' + alias + ')<br>Business ID: ' + id + '<br> Located at: ' + address + ' ' + city + ', ' + state + ' ' + zipcode + '<br>The phone number for this business is: ' + phone + '<br>This business has a rating of ' + rating + ' with ' + reviewcount + ' reviews.</div>');
               });
             } else {
                 // If our results are 0; no businesses were returned by the JSON therefor we display on the page no results were found
                // $('#results').append('<h5>We discovered no results!</h5>');
             }
            }
        }); 




})