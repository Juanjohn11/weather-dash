var apiKey= "32eb3d91e45e32ef2ed78d64e217de54"

function getWeather (){
    var cityName = "sacramento"
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" + apiKey

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);    
        
        var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+data.coord.lat + "&lon="+data.coord.lon + "&units=imperial&appid=" + apiKey

        fetch(url2)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            console.log(data)
        })

    })
    
}
getWeather();
