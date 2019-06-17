var city="";
var arrImg=[];
var getImgAdd = function(id,i){
    var str="";
    var queryURL2 = "https://api.foursquare.com/v2/venues/"+id+"/photos?&client_id=EQT3MWTTHGD5UUMTK20GEWAGTXPYHRKNVDNSZOU1TVDJVZUE&client_secret=2H1L0MHXEJYSTTU04QWJV2DK234QS0JLV5RAVBF3TFDNLM5K&v=20130307";

        $.ajax({
            url:queryURL2,
            method: "GET"
        }).then(function(response){
            
             str= response.response.photos.items[0].prefix+"300x200"+response.response.photos.items[0].suffix;
            arrImg.push(str);
            
        })
        return str;
}

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
var id;
var arrID=[];


$('#thingsToDo').on('click',function(){
    console.log("clicked");

    queryURL = "https://api.foursquare.com/v2/venues/explore?near=seattle&radius=19400&client_id=FKUKBMNOPYCM1I14KUGF3FGAPLMISDU1AMXW0AJI3HZ2TAOY&client_secret=DWG1DMT5EP0P3MPUIPGO0NZH22H1RUPHDINFOGNFG3ZQJTXF&v=20130307&categoryId=4bf58dd8d48988d165941735";

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

        $('#visit1').text("Visit "+response.response.groups[0].items[0].venue.name);
        $('#visit2').text("Visit "+response.response.groups[0].items[1].venue.name);
        $('#visit3').text("Visit "+response.response.groups[0].items[2].venue.name);
        $('#visit4').text("Visit "+response.response.groups[0].items[3].venue.name);
        $('#visit5').text("Visit "+response.response.groups[0].items[4].venue.name);
        $('#visit6').text("Visit "+response.response.groups[0].items[5].venue.name);

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

        for(var i=0;i<6;i++){
            arrID.push(response.response.groups[0].items[i].venue.id);
            var str =getImgAdd(response.response.groups[0].items[i].venue.id,i);
            
            //console.log(arrImg[i]);
        }

        console.log(arrImg.length);
        $('$img1').attr('src',arrImg[0].pop());
        $('$img2').attr('src',arrImg[1]);
        $('$img3').attr('src',arrImg[2]);
        $('$img4').attr('src',arrImg[3]);
        $('$img5').attr('src',arrImg[4]);
        $('$img6').attr('src',arrImg[5]);

        
        

        
    })

    
    

    


})