var apiKey= "32eb3d91e45e32ef2ed78d64e217de54"


function saveHis (name){
    var searchHistory = JSON.parse(localStorage.getItem('searchhis'))|| []
    searchHistory.push(name)
    localStorage.setItem('searchhis',JSON.stringify(searchHistory))

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
        //saveHis(res.name)
        var url2 = "https://api.openweathermap.org/data/2.5/onecall?lat="+res.coord.lat + "&lon="+res.coord.lon + "&units=imperial&appid=" + apiKey

        fetch(url2)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            
            var output = document.getElementById('output')
            output.innerHTML= "";
            console.log(data)
            
            var btn = document.createElement("h1");   
            btn.textContent = "City " + res.name;                 
            output.appendChild(btn);
            
            var btn = document.createElement("p");   
            btn.textContent = "Temp: " + data.current.temp + "F";                 
            output.appendChild(btn);

            var btn = document.createElement("p");   
            btn.textContent = "Humidity: " + data.current.humidity + "%";                 
            output.appendChild(btn);

            var btn = document.createElement("p");   
            btn.textContent = "UV Index: " + data.current.uvi;                 
            output.appendChild(btn);

            var btn = document.createElement("p");   
            btn.textContent = "Wind: " + res.wind.speed + " MPH";                 
            output.appendChild(btn);

            //5 day 

            var output1 = document.getElementById('out1')
            output1.innerHTML = "";

            // var btn = document.createElement("h1");
            // btn.textContent = "5 Day forcast "
            // output1.appendChild(btn);
            //the next day [1]
            var btn = document.createElement("p");
            btn.textContent = "Temp: " + data.daily[1].temp.max;
            output1.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "Humidity: " + data.daily[1].humidity;
            output1.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "UV Index: " + data.daily[1].uvi;
            output1.appendChild(btn);
            
            var btn = document.createElement("p");
            btn.textContent = "Wind: " + data.daily[1].wind_speed;
            output1.appendChild(btn);

            //[2]
            var output2 = document.getElementById('out2')
            output2.innerHTML= "";


            var btn = document.createElement("p");
            btn.textContent = "Temp: " + data.daily[2].temp.max;
            output2.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "Humidity: " + data.daily[2].humidity;
            output2.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "UV Index: " + data.daily[2].uvi;
            output2.appendChild(btn);
            
            var btn = document.createElement("p");
            btn.textContent = "Wind: " + data.daily[2].wind_speed;
            output2.appendChild(btn);

            //[3]

            var output3 = document.getElementById('out3')
            output3.innerHTML="";

            var btn = document.createElement("p");
            btn.textContent = "Temp: " + data.daily[3].temp.max;
            output3.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "Humidity: " + data.daily[3].humidity;
            output3.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "UV Index: " + data.daily[3].uvi;
            output3.appendChild(btn);
            
            var btn = document.createElement("p");
            btn.textContent = "Wind: " + data.daily[3].wind_speed;
            output3.appendChild(btn);

            //[4]

            var output4 = document.getElementById('out4')
            output4.innerHTML="";

            var btn = document.createElement("p");
            btn.textContent = "Temp: " + data.daily[4].temp.max;
            output4.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "Humidity: " + data.daily[4].humidity;
            output4.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "UV Index: " + data.daily[4].uvi;
            output4.appendChild(btn);
            
            var btn = document.createElement("p");
            btn.textContent = "Wind: " + data.daily[4].wind_speed;
            output4.appendChild(btn);

            //[5]

            var output5 = document.getElementById('out5')
            output5.innerHTML="";

            var btn = document.createElement("p");
            btn.textContent = "Temp: " + data.daily[5].temp.max;
            output5.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "Humidity: " + data.daily[5].humidity;
            output5.appendChild(btn);

            var btn = document.createElement("p");
            btn.textContent = "UV Index: " + data.daily[5].uvi;
            output5.appendChild(btn);
            
            var btn = document.createElement("p");
            btn.textContent = "Wind: " + data.daily[5].wind_speed;
            output5.appendChild(btn);
            

        })

    })
}
document.getElementById('user-form').addEventListener('submit',getWeather);

displayHistory()

