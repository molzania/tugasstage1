let API1 = "https://api.kawalcorona.com/indonesia";
let API2 = "https://api.kawalcorona.com/indonesia/provinsi";
let API3 = "https://api.kawalcorona.com/";

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
    console.log(result2)
})
.catch(error2 => {
    console.log(error2);
})

fetch(API3, {method: "GET"})
.then(result3 => result3.json())
.then(result3 => {
    console.log(result3)
})
.catch(error3 => {
    console.log(error3);
})