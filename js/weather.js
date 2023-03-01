const API_KEY = "4e777ca029bf902bf1a2462f22eeb850";

function geoSuccess(position){
    const lati = position.coords.latitude, // 위도
    long = position.coords.longitude, // 경도
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const weatherContianer = document.getElementById("weather"),
        city = weatherContianer.querySelector(".city"),
        weather = weatherContianer.querySelector(".weather");
        console.log(city, weather);

        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, 최고 ${parseInt(data.main.temp_max)}℃ 최저 ${parseInt(data.main.temp_min)}℃`;
    }); // API의 url을 json으로 응답받음
}
function geoError(){
    alert("can't find you. don't have weather for you.");
}

// 위치정보 얻어오기
// getCurrentPosition("에러가 없을 때 사용될 콜백함수", "에러가 있을 때 사용될 콜백함수")
navigator.geolocation.getCurrentPosition(geoSuccess, geoError); 
