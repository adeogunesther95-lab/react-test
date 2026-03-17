import axios from "axios";
import React from "react";

export default function Weather(props) {
  function showWeather(response) {
    alert(`It is ${response.data.main.temp}C in ${props.city}`);
  }
  let apiKey = "7797aa5c054d2bf0b327b9a77385efb6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWeather);
}
