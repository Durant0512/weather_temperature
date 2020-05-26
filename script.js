fetch(
  "http://api.openweathermap.org/data/2.5/weather?id=709930&appid=b541f8e1fe52ac12f29267f498a12b0c"
)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    document.querySelector(".city-name").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML =
      Math.round(data.main.temp - 273) + "&deg;";
    document.querySelector(".weather").innerHTML =
      data.weather[0]["description"];
    //https://openweathermap.org/img/wn/04d@2x.png
    document.querySelector(".icon").innerHTML =
      '<img src="https://openweathermap.org/img/wn/' +
      data.weather[0]["icon"] +
      '@2x.png">';
  })
  .catch(function () {});

// $(document).ready(function () {
//   $.get(
//     "http://api.openweathermap.org/data/2.5/weather",
//     {
//       id: "709930",
//       appid: "b541f8e1fe52ac12f29267f498a12b0c",
//     },
//     function (data) {
//       console.log(data);
//     }
//   );
// });

// const managerApi = {
//   apiKey: "b541f8e1fe52ac12f29267f498a12b0c",

//   // Get list posts METHOD GET
//   getPosts(id = "709930") {
//     const params = `id=${id}&&api_key=${this.apiKey}`;
//     const url = `http://api.openweathermap.org/data/2.5/weather?${params}`;

//     return fetch(url).then((response) => {
//       return response.json();
//     });
//   },
// };
