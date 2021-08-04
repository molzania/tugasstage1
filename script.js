let API1 = "https://covid19.mathdro.id/api/countries/indonesia";
let API2 = "https://covid19.mathdro.id/api/";
let API3 = "https://covid19.mathdro.id/api/confirmed";

let indonesia = document.getElementById("data-covid-ina");
let global = document.getElementById("data-covid-dunia");

fetch(API1, {method: "POST"})
.then(result1 => result1.json())
.then(result1 => {
    console.log(result1)
})
.catch(error1 => {
    console.log(error1);
})

fetch(API2, {method: "POST"})
.then(result2 => result2.json())
.then(result2 => {
    console.log(result2)})
.catch(error2 => {
    console.log(error2);
})

fetch(API3, {method: "POST"})
.then(result3 => result3.json())
.then(result3 => {
    console.log(result3)
    for (let b=0;b<=23;b++){
        countriesContainer.innerHTML += `
        <div id="flag"> 
        <img src='${result3[b].flag}'/>
        <span>${result3[b].name}</span>
         </div>` }
})
.catch(error3 => {
    console.log(error3);
})