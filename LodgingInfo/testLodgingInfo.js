$("#find-lodge").on("click", function (event) {

    event.preventDefault();

    var country = $("#country-input1").val();            
    var flightDateFrom = $("#lodge-dateInput1").val();
    var flightDateTo = $("#lodge-dateInput2").val();


        
        $.ajax({
            url :"https://api.makcorps.com/free/london",
            method: "GET", 
    headers: {'Authorization: JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MTc2NzczNjAsImlkZW50aXR5IjozLCJuYmYiOjE1MTc2NzczNjAsImV4cCI6MTUxNzY3OTE2MH0.ytSqQj3VDymEaJz9EIdskWELwDQZRD1Dbo6TuHaPz9U',
        },            
        }).then(function (response) {
                $("#lodge-view").text(JSON.stringify(response));
            });
});