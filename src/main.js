import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorLookup} from './doctor-lookup.js'

$(document).ready(function() {
 $('#MedCondition').click(function() {

  //  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=sore%20throat&location=47.602084%2C%20-122.333312%2C100&user_location=47.602084%2C%20-122.333312&skip=0&limit=10&user_key=286ec2bfb7ac3a5693ba2b0be2a099eb`;
   let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}=47.602084%2C%20-122.333312%2C100&user_location=47.602084%2C%20-122.333312&skip=0&limit=10&user_key=286ec2bfb7ac3a5693ba2b0be2a099eb`;
   let request = new XMLHttpRequest();
   let condition = $("#condition").val();

   console.log(">>>>>>>>>>>>>>>>condition" + condition)
   request.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       console.log("DONE");
       console.log(condition);

       let response = JSON.parse(this.responseText);
       getElements(response);

     }
   }


   request.open("GET", url, true);
   request.send();

   let getElements = function(response) {
     console.log(response);
     console.log(`For the symyptom ${condition} these are the available doctors:`)
     $('.condition').text(`For the symyptom ${condition} these are the available doctors:`)
     $('.firstName').text(`First name: ${response.data[0].profile.first_name}`)
    //  $('.condition').text(`The doctors name is ${response.data[0].profile.first_name}`);

   }
 });
});
