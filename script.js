let API1 = "https://covid19.mathdro.id/api/countries/indonesia";
let API2 = "https://covid19.mathdro.id/api/";

let indonesiaConfirmed = document.getElementById("value-konfirmasi-indo");
let indonesiaRecovered = document.getElementById("value-sembuh-indo");
let indonesiaDeaths = document.getElementById("value-meninggal-indo");
let globalConfirmed = document.getElementById("value-konfirmasi-dunia");
let globalRecovered = document.getElementById("value-sembuh-dunia");
let globalDeaths = document.getElementById("value-meninggal-dunia");

fetch(API1, {method: "GET"})
.then(result1 => result1.json())
.then(result1 => {
    console.log(result1)
indonesiaConfirmed.innerHTML = `${result1.confirmed.value}`
indonesiaRecovered.innerHTML = `${result1.recovered.value}`
indonesiaDeaths.innerHTML = `${result1.deaths.value}`
})
.catch(error1 => {
    console.log(error1);
})

fetch(API2, {method: "GET"})
.then(result2 => result2.json())
.then(result2 => {
    console.log(result2)
    globalConfirmed.innerHTML = `${result2.confirmed.value}`
    globalRecovered.innerHTML = `${result2.recovered.value}`
    globalDeaths.innerHTML =  `${result2.deaths.value}`

})
.catch(error2 => {
    console.log(error2);
})