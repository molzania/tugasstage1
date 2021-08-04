let API1 = "https://covid19.mathdro.id/api/";

fetch(API1, {method: "POST"})
.then(result => result.json())
.then(result => {
    console.log(result)
    for (let b=0;b<=23;b++){
        countriesContainer.innerHTML += `
        <div id="flag"> 
        <img src='${result[b].flag}'/>
        <span>${result[b].name}</span>
         </div>` }
})
.catch(error => {
    console.log(error);
})
