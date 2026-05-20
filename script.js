let Container1 = document.getElementById('container1') ; 
let Containers = document.querySelectorAll('.container') ; 
let button = document.getElementById('submit') ;
let getcity = document.getElementById('cityname') ; 
const apiKey = "7854d0c2ad2215df75103315c1af544c"; 
async function getdata(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
     let response = await fetch(url).then((response) =>{
        return (response.json()) ; 
     }).then((json) => { return json['main']
}
).then((weather) => {

Container1.innerHTML = `<h1><strong>Temp : ${weather['temp']} </strong> <span>(in degree cencius) </span></h1> <h1><strong>Feels Like  : ${weather['feels_like']}</strong> <span>(in degree cencius) </span></h1><h1><strong>City Name :${city} </strong></h1>`; 
const arr = ["Min-tempr : " , "Max-Tempr : " , "Pressure : " , "Humidity : " , "Sea-Level : " , "Ground Level : "] ; 
const arr2 = ["temp_min" ,"temp_max" ,"pressure" ,"humidity" ,"sea_level" , "grnd_level" ]
for(let i = 0 ; i<Containers.length ; i++){
    Containers[i].innerHTML = `<h2 >${arr[i]} ${weather[arr2[i]]}</h2>`; 
}
    
}) ; 
}

button.addEventListener('click' , changecity) ; 
function changecity() {
   
    let city_1 = getcity.value ; 
    if(city_1.length > 0 )  {
       getdata(city_1) ; 
}  
}
function currentLocation(){
   navigator.geolocation.getCurrentPosition(
    async (position) => {

    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    const url =
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);

    let data = await response.json();

    let city_name = data.name;
    getdata(city_name) ; 
    
});   
}
currentLocation() ; 

