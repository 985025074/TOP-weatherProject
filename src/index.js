import "./styles.css"
let btn = document.querySelector("#submit");
let input = document.querySelector("#loc");
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let tit = document.querySelector("#title");
const api = "LJZUT9TENLME9P2SQRL59M56S";
async function getWeather(location) {
    let result ={};
    try{
      let query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&include=current&key=${api}&contentType=json`
      let response = await fetch(query);
      let json= await response.json();
      result.location = json["resolvedAddress"]
      result.temp = json.days[0].temp;
      console.table(result);

      return result;
    }
    catch(error){
        console.log(error);
    }
};
btn.addEventListener("click", () =>{
    let location = input.value;
    let cityText, tempText;
    tit.classList.add("active");
     getWeather(location).then(obj=>{
      console.log(obj);
        cityText = obj.location;
        tempText = obj.temp;
        city.textContent = "City: " + cityText;
        temp.textContent = "Temperature: " + tempText;
      
     }).catch(()=>{
      alert("Invalid location");
     }).finally(()=>{
      tit.classList.remove("active");
     })

});