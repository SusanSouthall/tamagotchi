import { Tamagotchi } from "./tamagotchi.js";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $("#feed").click(function() {

    $.ajax({
      url: `https://api.giphy.com/v1/stickers/search?q=hamtaro&api_key=${process.env.API_KEY}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        console.log(response);
        $('.hamtaroImage').append(`<img src="${response.data[7].images.downsized.url}" alt="giphy">`);
      },
      error: function() {
        $('#errors').text("There was an error processing your request. Please try again.")
      }
    });
  });
});
