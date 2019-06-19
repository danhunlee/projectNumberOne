var city="";
var arrImg=[];
var img1Add="";
var img2Add="";
var img3Add="";
var img4Add="";
var img5Add="";
var img6Add="";
var client_id="MJBIBWHKDRN0ZH03RKFFE332NPB3LLIHY0XPQG4UWPFONIFN";
var client_secret="OI0DMMT0QTUOASXKNH33Q2S0HED1AYKDJRSUHUTHPDVV15FQ";


$('#search').on('click',function(){
    city=$('#autocomplete-input').val();
    console.log(city);
    queryURL = "https://api.foursquare.com/v2/venues/explore?near="+city+"&radius=19400&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307&categoryId=4bf58dd8d48988d165941735";

    $.ajax({
        url : queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.response.groups[0].items[0].venue);
        
        $('#image-title1').text(response.response.groups[0].items[0].venue.name);
        $('#image-title2').text(response.response.groups[0].items[1].venue.name);
        $('#image-title3').text(response.response.groups[0].items[2].venue.name);
        $('#image-title4').text(response.response.groups[0].items[3].venue.name);
        $('#image-title5').text(response.response.groups[0].items[4].venue.name);
        $('#image-title6').text(response.response.groups[0].items[5].venue.name);

        $('#image-content1').text(response.response.groups[0].items[0].venue.name);
        $('#image-content2').text(response.response.groups[0].items[1].venue.name);
        $('#image-content3').text(response.response.groups[0].items[2].venue.name);
        $('#image-content4').text(response.response.groups[0].items[3].venue.name);
        $('#image-content5').text(response.response.groups[0].items[4].venue.name);
        $('#image-content6').text(response.response.groups[0].items[5].venue.name);

        $('#visit1').text("Visit Here");
        $('#visit2').text("Visit Here");
        $('#visit3').text("Visit Here");
        $('#visit4').text("Visit Here");
        $('#visit5').text("Visit Here");
        $('#visit6').text("Visit Here");

        $('#addlin11').text(response.response.groups[0].items[0].venue.location.formattedAddress[0]);
        $('#addlin12').text(response.response.groups[0].items[0].venue.location.formattedAddress[1]);
        $('#addlin21').text(response.response.groups[0].items[1].venue.location.formattedAddress[0]);
        $('#addlin22').text(response.response.groups[0].items[1].venue.location.formattedAddress[1]);
        $('#addlin31').text(response.response.groups[0].items[2].venue.location.formattedAddress[0]);
        $('#addlin32').text(response.response.groups[0].items[2].venue.location.formattedAddress[1]);
        $('#addlin41').text(response.response.groups[0].items[3].venue.location.formattedAddress[0]);
        $('#addlin42').text(response.response.groups[0].items[3].venue.location.formattedAddress[1]);
        $('#addlin51').text(response.response.groups[0].items[4].venue.location.formattedAddress[0]);
        $('#addlin52').text(response.response.groups[0].items[4].venue.location.formattedAddress[1]);
        $('#addlin61').text(response.response.groups[0].items[5].venue.location.formattedAddress[0]);
        $('#addlin62').text(response.response.groups[0].items[5].venue.location.formattedAddress[1]);

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[0].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img1').attr("src",str);
            
            
        })


        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[1].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img2').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[2].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img3').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[3].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img4').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[4].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img5').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[5].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img6').attr("src",str);
            
            
        })
       
    })
})
var id;
var arrID=[];


$('#Things-to-do-btn').on('click',function(){
    console.log("clicked");

    queryURL = "https://api.foursquare.com/v2/venues/explore?near="+city+"&radius=19400&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307&categoryId=4bf58dd8d48988d165941735";

    $.ajax({
        url : queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response.response.groups[0].items[0].venue);
        
        $('#image-title1').text(response.response.groups[0].items[0].venue.name);
        $('#image-title2').text(response.response.groups[0].items[1].venue.name);
        $('#image-title3').text(response.response.groups[0].items[2].venue.name);
        $('#image-title4').text(response.response.groups[0].items[3].venue.name);
        $('#image-title5').text(response.response.groups[0].items[4].venue.name);
        $('#image-title6').text(response.response.groups[0].items[5].venue.name);

        $('#image-content1').text(response.response.groups[0].items[0].venue.name);
        $('#image-content2').text(response.response.groups[0].items[1].venue.name);
        $('#image-content3').text(response.response.groups[0].items[2].venue.name);
        $('#image-content4').text(response.response.groups[0].items[3].venue.name);
        $('#image-content5').text(response.response.groups[0].items[4].venue.name);
        $('#image-content6').text(response.response.groups[0].items[5].venue.name);

        $('#visit1').text("Visit Here");
        $('#visit2').text("Visit Here");
        $('#visit3').text("Visit Here");
        $('#visit4').text("Visit Here");
        $('#visit5').text("Visit Here");
        $('#visit6').text("Visit Here");

        $('#addlin11').text(response.response.groups[0].items[0].venue.location.formattedAddress[0]);
        $('#addlin12').text(response.response.groups[0].items[0].venue.location.formattedAddress[1]);
        $('#addlin21').text(response.response.groups[0].items[1].venue.location.formattedAddress[0]);
        $('#addlin22').text(response.response.groups[0].items[1].venue.location.formattedAddress[1]);
        $('#addlin31').text(response.response.groups[0].items[2].venue.location.formattedAddress[0]);
        $('#addlin32').text(response.response.groups[0].items[2].venue.location.formattedAddress[1]);
        $('#addlin41').text(response.response.groups[0].items[3].venue.location.formattedAddress[0]);
        $('#addlin42').text(response.response.groups[0].items[3].venue.location.formattedAddress[1]);
        $('#addlin51').text(response.response.groups[0].items[4].venue.location.formattedAddress[0]);
        $('#addlin52').text(response.response.groups[0].items[4].venue.location.formattedAddress[1]);
        $('#addlin61').text(response.response.groups[0].items[5].venue.location.formattedAddress[0]);
        $('#addlin62').text(response.response.groups[0].items[5].venue.location.formattedAddress[1]);

       

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[0].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img1').attr("src",str);
            
            
        })


        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[1].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img2').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[2].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img3').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[3].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img4').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[4].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img5').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[5].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img6').attr("src",str);
            
            
        })
       
    })

})

    $('#food-btn').on('click',function(){

        queryURL = "https://api.foursquare.com/v2/venues/explore?near="+city+"&radius=19400&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307&categoryId=4d4b7105d754a06374d81259";

        $.ajax({
            url : queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.response.groups[0].items[0].venue);
        $('#image-title1').text(response.response.groups[0].items[0].venue.name);
        $('#image-title2').text(response.response.groups[0].items[1].venue.name);
        $('#image-title3').text(response.response.groups[0].items[2].venue.name);
        $('#image-title4').text(response.response.groups[0].items[3].venue.name);
        $('#image-title5').text(response.response.groups[0].items[4].venue.name);
        $('#image-title6').text(response.response.groups[0].items[5].venue.name);

        $('#image-content1').text(response.response.groups[0].items[0].venue.name);
        $('#image-content2').text(response.response.groups[0].items[1].venue.name);
        $('#image-content3').text(response.response.groups[0].items[2].venue.name);
        $('#image-content4').text(response.response.groups[0].items[3].venue.name);
        $('#image-content5').text(response.response.groups[0].items[4].venue.name);
        $('#image-content6').text(response.response.groups[0].items[5].venue.name);

        $('#visit1').text("Visit Here");
        $('#visit2').text("Visit Here");
        $('#visit3').text("Visit Here");
        $('#visit4').text("Visit Here");
        $('#visit5').text("Visit Here");
        $('#visit6').text("Visit Here");


        $('#addlin11').text(response.response.groups[0].items[0].venue.location.formattedAddress[0]);
        $('#addlin12').text(response.response.groups[0].items[0].venue.location.formattedAddress[1]);
        $('#addlin21').text(response.response.groups[0].items[1].venue.location.formattedAddress[0]);
        $('#addlin22').text(response.response.groups[0].items[1].venue.location.formattedAddress[1]);
        $('#addlin31').text(response.response.groups[0].items[2].venue.location.formattedAddress[0]);
        $('#addlin32').text(response.response.groups[0].items[2].venue.location.formattedAddress[1]);
        $('#addlin41').text(response.response.groups[0].items[3].venue.location.formattedAddress[0]);
        $('#addlin42').text(response.response.groups[0].items[3].venue.location.formattedAddress[1]);
        $('#addlin51').text(response.response.groups[0].items[4].venue.location.formattedAddress[0]);
        $('#addlin52').text(response.response.groups[0].items[4].venue.location.formattedAddress[1]);
        $('#addlin61').text(response.response.groups[0].items[5].venue.location.formattedAddress[0]);
        $('#addlin62').text(response.response.groups[0].items[5].venue.location.formattedAddress[1]);

       

       




        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[0].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img1').attr("src",str);
            
            
        })


        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[1].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img2').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[2].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img3').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[3].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img4').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[4].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img5').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[5].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img6').attr("src",str);
            
            
        })
    })


    })


$('#activity-btn').on('click',function(){

    queryURL = "https://api.foursquare.com/v2/venues/explore?near="+city+"&radius=19400&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307&categoryId=4d4b7104d754a06370d81259";

        $.ajax({
            url : queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response.response.groups[0].items[0].venue);
        $('#image-title1').text(response.response.groups[0].items[0].venue.name);
        $('#image-title2').text(response.response.groups[0].items[1].venue.name);
        $('#image-title3').text(response.response.groups[0].items[2].venue.name);
        $('#image-title4').text(response.response.groups[0].items[3].venue.name);
        $('#image-title5').text(response.response.groups[0].items[4].venue.name);
        $('#image-title6').text(response.response.groups[0].items[5].venue.name);

        $('#image-content1').text(response.response.groups[0].items[0].venue.name);
        $('#image-content2').text(response.response.groups[0].items[1].venue.name);
        $('#image-content3').text(response.response.groups[0].items[2].venue.name);
        $('#image-content4').text(response.response.groups[0].items[3].venue.name);
        $('#image-content5').text(response.response.groups[0].items[4].venue.name);
        $('#image-content6').text(response.response.groups[0].items[5].venue.name);

        $('#visit1').text("Visit Here");
        $('#visit2').text("Visit Here");
        $('#visit3').text("Visit Here");
        $('#visit4').text("Visit Here");
        $('#visit5').text("Visit Here");
        $('#visit6').text("Visit Here");



        $('#addlin11').text(response.response.groups[0].items[0].venue.location.formattedAddress[0]);
        $('#addlin12').text(response.response.groups[0].items[0].venue.location.formattedAddress[1]);
        $('#addlin21').text(response.response.groups[0].items[1].venue.location.formattedAddress[0]);
        $('#addlin22').text(response.response.groups[0].items[1].venue.location.formattedAddress[1]);
        $('#addlin31').text(response.response.groups[0].items[2].venue.location.formattedAddress[0]);
        $('#addlin32').text(response.response.groups[0].items[2].venue.location.formattedAddress[1]);
        $('#addlin41').text(response.response.groups[0].items[3].venue.location.formattedAddress[0]);
        $('#addlin42').text(response.response.groups[0].items[3].venue.location.formattedAddress[1]);
        $('#addlin51').text(response.response.groups[0].items[4].venue.location.formattedAddress[0]);
        $('#addlin52').text(response.response.groups[0].items[4].venue.location.formattedAddress[1]);
        $('#addlin61').text(response.response.groups[0].items[5].venue.location.formattedAddress[0]);
        $('#addlin62').text(response.response.groups[0].items[5].venue.location.formattedAddress[1]);

       

       

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[0].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img1').attr("src",str);
            
            
        })


        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[1].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img2').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[2].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img3').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[3].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img4').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[4].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img5').attr("src",str);
            
            
        })

        var queryURL2 = "https://api.foursquare.com/v2/venues/"+response.response.groups[0].items[5].venue.id+"/photos?&client_id="+client_id+"&client_secret="+client_secret+"&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            
            console.log(str);
            $('#img6').attr("src",str);
            
            
        })
    })

})

