var city="";

$('#search').on('click',function(){
    city=$('#searchCity').val();
    console.log(city);

    queryURL = "https://api.foursquare.com/v2/venues/explore?near="+city+"&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307";

    $.ajax({
        url : queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
       
    })
})



$('#thingsToDo').on('click',function(){
    console.log("clicked");

    queryURL = "https://api.foursquare.com/v2/venues/explore?near=seattle&radius=19400&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307&categoryId=4d4b7105d754a06379d81259";

    $.ajax({
        url : queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.response.groups[0].items[0].venue.name);
        $('#image-title1').text(response.response.groups[0].items.length);
    })
})