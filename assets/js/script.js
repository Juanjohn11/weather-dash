var apiKey= "32eb3d91e45e32ef2ed78d64e217de54"


function saveHis (name){
    var searchHistory = JSON.parse(localStorage.getItem('searchhis'))|| []
    searchHistory.push(name)
    localStorage.setItem('searchhis',JSON.stringify(searchHistory))
    //displayHistory()

}
function displayHistory(){
    var searchHistory = JSON.parse(localStorage.getItem('searchhis'))|| []
    for (var i = 0; i < searchHistory.length; i++){
        var item = searchHistory[i]
        var hist = document.createElement("p");   
            hist.textContent = item;                 
            document.getElementById('history').appendChild(hist);

    }


}

function getWeather (event){
    event.preventDefault()
    var cityName = document.getElementById('cityLoc').value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName + "&units=imperial&appid=" + apiKey

    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res);    
        saveHis(res.name)
        var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+res.coord.lat + "&lon="+res.coord.lon + "&units=imperial&appid=" + apiKey

        fetch(url2)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            var output = document.getElementById('output')
            output.innerHTML= "";
            console.log(data)
            var btn = document.createElement("p");   
            btn.textContent = "City " + res.name;                 
            output.appendChild(btn);
           var btn = document.createElement("p");   
            btn.textContent = "Temp " + data.current.temp;                 
            output.appendChild(btn);

            var btn = document.createElement("p");   
            btn.textContent = "hum " + data.current.humidity;                 
            output.appendChild(btn);
        })

    })
}
document.getElementById('user-form').addEventListener('submit',getWeather);

displayHistory()

