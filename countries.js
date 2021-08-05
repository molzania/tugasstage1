let API1 = "https://covid19.mathdro.id/api/confirmed";

let countriesContainer = document.getElementById("data-container");

fetch(API1, {method: "GET"})
.then(result => result.json())
.then(result => {
    console.log(result)
    for (let i=0;i<=180;i++){
        countriesContainer.innerHTML += `
        <h3>${result[i].countryRegion}</h3>
        <div id="data-negara">
        <div id="konfirmasi">
        <h4>Konfirmasi</h4>
        <p>${result[i].confirmed}</p>
        </div>
        <div id="sembuh">
        <h4>Sembuh</h4>
        <p>${result[i].recovered}</p>
        </div>
        <div id="meninggal">
        <h4>Meninggal</h4>
        <p>${result[i].deaths}</p>
        </div>
        </div>
        `
    }
})
.catch(error => {
    console.log(error);
})

function searchByName() {
    let regex2=/^[A-Za-z0-9_.]+$/
    textInput = document.getElementById("search").value;
    display = document.getElementById("data-container");

    for(let i=0;i<=180;i++){
        result[i].countryRegion;
        regex2.test(textInput);
        if(true){
            display.innerHTML = regex.test(textInput)
        }
    }
}
