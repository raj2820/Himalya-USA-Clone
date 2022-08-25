let data=document.getElementById("data")
let map = document.getElementById("gmap_canvas");
let search=()=>{
    var box=document.getElementById("box").value;
    data.innerText=box
    map.src=document.getElementById("frm"). src=`https://www.google.com/maps/embed/v1/place?key=${key}&q=${box}&zoom=13`;
    
}
data.innerText="Sorry, we didn't find any stores nearby."

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  let crd;
  let lat;
  let lon;
  function success(pos) {
     crd = pos.coords;
  
    // console.log('Your current position is:');
    // console.log(`Latitude : ${crd.latitude}`);
    lat=crd.latitude.toFixed(4)
   
    // console.log(`Longitude: ${crd.longitude}`);
    lon=crd.longitude.toFixed(4)

    // console.log(`More or less ${crd.accuracy} meters.`);
    document.getElementById("frm"). src=`https://www.google.com/maps/embed/v1/view?key=${key}&center=${lat},${lon}&zoom=13`
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  let key="AIzaSyDjqECnvCDalZBHRHZyW7TA6YSWWRKB6qw"
  navigator.geolocation.getCurrentPosition(success, error, options);
 
 