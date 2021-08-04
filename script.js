let API1 = "https://covid19.mathdro.id/api/countries/indonesia";
let API2 = "https://covid19.mathdro.id/api/";

let indonesia = document.getElementById("data-covid-ina");
let global = document.getElementById("data-covid-dunia");

fetch(API1, {method: "GET"})
.then(result1 => result1.json())
.then(result1 => {
    console.log(result1)
})
.catch(error1 => {
    console.log(error1);
})

fetch(API2, {method: "GET"})
.then(result2 => result2.json())
.then(result2 => {
    console.log(result2)})
.catch(error2 => {
    console.log(error2);
})