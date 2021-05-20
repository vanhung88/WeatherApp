let weather={
    ApiKey :"22e0aafc6022983798d57c38636ec8f3",

    fetchWeather: function(city){
        fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+ this.ApiKey)
            .then(response => response.json())
            .then(data => {
                if(data.cod==404){
                    document.querySelector(".city").innerText="city is not found"
                    document.querySelector(".wrapperNone").style.display="none"
                }else{
                    this.displayWeather(data)
                    document.querySelector(".wrapperNone").style.display="block"
                }
            })
    },

    displayWeather: function(data){
        const {name}=data //or const name=data.name ;
        const {description,icon}=data.weather[0] ;
        const {temp}=data.main ;
        const {humidity}=data.main ;
        const windSpeed=data.wind.speed
        // const windSpeed=data.wind.speed
        // const {speed}=data.wind ;
        
        document.querySelector(".city").innerText="Weather in "+ name ;
        document.querySelector('.temp').innerText=temp+" °C";
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        document.querySelector('.description').innerText=description;
        document.querySelector('.humidity').innerText="humidity: "+humidity+" °C";
        document.querySelector('.windSpeed').innerText="Wind speed: "+windSpeed+"km/h";
        
        console.log(data.cod)
    },
    search:function(){
        this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector(".search-bar")
    .addEventListener("keyup", (event)=>{
        if(event.keyCode===13){
            event.preventDefault();
            document.querySelector('.search-img--wrapper').click()
        }
    })