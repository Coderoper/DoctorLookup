import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
 $('#bikeManufacturer').click(function() {
   let manufacturer = $('#manufacturer').val();
   console.log("manufacturer: "+manufacturer);

   $('#manufacturer').val("");

   let request = new XMLHttpRequest();

  //  let url = 'https://bikeindex.org:443/api/v3/search?manufacturer=Trek&stolenness=stolen';
   let url = `https://bikeindex.org:443/api/v3/search?manufacturer=${manufacturer}&stolenness=stolen`;
   console.log(url);
   request.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       console.log("DONE");
       let response = JSON.parse(this.responseText);
       getElements(response);
     }
   }

   request.open("GET", url, true);
   request.send();

   let getElements = function(response) {
     console.log(response);
     $('.manufacturer').text(`The manufacturer is ${manufacturer} is ${response.bikes[3].manufacturer_name}`);

   }
 });
});
