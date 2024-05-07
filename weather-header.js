const key =
  "https://api.openweathermap.org/data/2.5/weather?q=salt+lake+city&appid=37e17cfe43dbe6e51ad8b0c80333bffc&units=imperial";
const URL =
  "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=43f1b3e8bf564e6498de5c74eb1425cc";
currentTemp = document.querySelector("#current-temp");
currentHumid = document.querySelector("#current-humid");
currentWindSpeed = document.querySelector("#current-windSpeed");
currentWindChill = document.querySelector("#current-windChill");

headerArticle = document.querySelector("#header-article");
headerDesc = document.querySelector("#header-desc");
headerImg = document.querySelector("#header-img");

let i = 0;
let c = 0;
let b = 4;
fetch(URL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    headerImg.src = jsObject.articles[0].urlToImage;
    headerDesc.textContent = jsObject.articles[0].description;
    headerArticle.textContent = jsObject.articles[0].title;

    while (i < b) {
      i++;
      if (
        jsObject.articles[i].title &&
        jsObject.articles[i].description &&
        jsObject.articles[i].url &&
        jsObject.articles[i].urlToImage != null
      ) {
        c++;
        articleLink = document.querySelector("#article-link-" + c);
        articleDesc = document.querySelector("#article-desc-" + c);
        articleImg = document.querySelector("#article-img-" + c);

        articleLink.href = jsObject.articles[i].url;
        articleLink.textContent = jsObject.articles[i].title;
        articleDesc.textContent = jsObject.articles[i].description;
        articleImg.src = jsObject.articles[i].urlToImage;
      } else if (b < 10) {
        b++;
      }
    }
  });

fetch(key)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    currentWindSpeed.textContent = jsObject.wind.speed;
    currentHumid.textContent = jsObject.main.humidity;
    currentTemp.textContent = jsObject.main.temp;
    currentWindChill.textContent =
      jsObject.main.temp - jsObject.wind.speed * 0.7;
    const descrip = jsObject.weather[0].description;
    document.getElementById("current-desc").textContent = descrip;
  });
