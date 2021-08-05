let API1 = "https://covid19.mathdro.id/api/confirmed";

let countriesContainer = document.getElementById("data-container");
let country =[];

fetch(API1, {method: "GET"})
.then(result => result.json())
.then(result => {
    console.log(result)
    for (let i=0;i<=180;i++){
        country.push(result[i])
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

let Cari = document.getElementById("cari");
Cari.onclick = searchByName;

function searchByName(){
    
    let display = document.getElementById("data-container");
    let textInput = document.getElementById("search").value;
    let regex = new RegExp(textInput);
    display.innerHTML = "";
    for(let i=0;i<country.length;i++){
      if(regex.test(`${country[i].countryRegion}`)){
        display.innerHTML += `
        <h3>${country[i].countryRegion}</h3>
        <div id="data-negara">
        <div id="konfirmasi">
        <h4>Konfirmasi</h4>
        <p>${country[i].confirmed}</p>
        </div>
        <div id="sembuh">
        <h4>Sembuh</h4>
        <p>${country[i].recovered}</p>
        </div>
        <div id="meninggal">
        <h4>Meninggal</h4>
        <p>${country[i].deaths}</p>
        </div>
        </div>
        `}
    }
    return false;
}