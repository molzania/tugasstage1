let API1 = "https://covid19.mathdro.id/api/confirmed";

let countriesContainer = document.getElementById("data-container");

fetch(API1, {method: "GET"})
.then(result => result.json())
.then(result => {
    console.log(result)
    for (let i=0;i<=10;i++){
        countriesContainer.innerHTML += `<p>${result[i].countryRegion}</p>`

    }
})
.catch(error => {
    console.log(error);
})
