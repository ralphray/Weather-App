

  //document.getElementById("name").innerHTML = "Hi";


  window.addEventListener("load", () => {

let long;
let lat;

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position);
        });
     }
});
