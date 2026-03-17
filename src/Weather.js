import axios from "axios";
import React from "react";

export default function Weather(props) {
  function showWeather(response) {
    alert(`It is ${response.data.main.temp}C` in {props.city});
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

  axios.get(apiUrl).then(showWeather);
}
