import './style.css';

const apiKey = '75b9a99ff5ee4179b7c175556230910';
const searchBar = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');
let place = 'Foster City';
async function getWeather(city) {
    if (!city) {
        return alert('Please enter a city');
    }
    const todayAndTomorrowForecast = fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`,
    );
    const yesterdayForecast = fetch(
        `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=${city}&dt=${new Date().toISOString().slice(0, 10)}`,
    ).catch((error) => {
        console.error('Error:', error);
    });

    const [todayAndTomorrowForecastResponse, yesterdayForecastResponse] = await Promise.all([
        todayAndTomorrowForecast,
        yesterdayForecast,
    ]);
    const todayAndTomorrowForecastData = await todayAndTomorrowForecastResponse.json();
    const yesterdayForecastData = await yesterdayForecastResponse.json();
    if (todayAndTomorrowForecastData.error) {
        return alert(todayAndTomorrowForecastData.error.message);
    }
    if (yesterdayForecastData.error) {
        return alert(yesterdayForecastData.error.message);
    }
    console.log(todayAndTomorrowForecastData, yesterdayForecastData);
    const today = await todayAndTomorrowForecastData.forecast.forecastday[0];
    const tomorrow = await todayAndTomorrowForecastData.forecast.forecastday[1];
    const yesterday = await yesterdayForecastData.forecast.forecastday[0];
    const getTemperature = (day) => ({
        high: day.day.maxtemp_f,
        low: day.day.mintemp_f,
        conditionIcon: day.day.condition.icon,
        conditionText: day.day.condition.text,
    });

    const {
        high: todayHigh,
        low: todayLow,
        conditionIcon: todayConditionIcon,
    } = getTemperature(today);
    const {
        high: tomorrowHigh,
        low: tomorrowLow,
        conditionIcon: tomorrowConditionIcon,
    } = getTemperature(tomorrow);
    const {
        high: yesterdayHigh,
        low: yesterdayLow,
        conditionIcon: yesterdayConditionIcon,
    } = getTemperature(yesterday);
    const currentTemp = todayAndTomorrowForecastData.current.temp_f;
    console.log(yesterdayHigh, yesterdayLow, yesterdayConditionIcon);
    return displayWeather(
        todayHigh,
        todayLow,
        todayConditionIcon,
        tomorrowHigh,
        tomorrowLow,
        tomorrowConditionIcon,
        yesterdayHigh,
        yesterdayLow,
        yesterdayConditionIcon,
        currentTemp,
    );
}
async function displayWeather(
    todayHigh,
    todayLow,
    todayConditionIcon,
    tomorrowHigh,
    tomorrowLow,
    tomorrowConditionIcon,
    yesterdayHigh,
    yesterdayLow,
    yesterdayConditionIcon,
    currentTemp,
) {
    // console.log(todayHigh, todayLow, todayConditionIcon);
    // console.log(tomorrowHigh, tomorrowLow, tomorrowConditionIcon);
    // console.log(yesterdayHigh, yesterdayLow, yesterdayConditionIcon);
    function setElementContent(selector, content) {
        if (
            selector === '.today-current-temp' ||
            selector === '.today-high-temp' ||
            selector === '.today-low-temp' ||
            selector === '.tomorrow-high-temp' ||
            selector === '.tomorrow-low-temp' ||
            selector === '.yesterday-high-temp' ||
            selector === '.yesterday-low-temp'
        ) {
            document.querySelector(selector).textContent = '';
            document.querySelector(selector).textContent += ` ${content}° F`;
        } else {
            document.querySelector(selector).textContent = content;
        }
    }

    function setElementSrc(selector, src) {
        document.querySelector(selector).src = src;
    }

    setElementContent('.yesterday-high-temp', yesterdayHigh);
    // console.log(yesterdayHigh);
    setElementContent('.yesterday-low-temp', yesterdayLow);
    setElementSrc('.yesterday-condition-icon', yesterdayConditionIcon);
    setElementContent('.today-high-temp', todayHigh);
    setElementContent('.today-low-temp', todayLow);
    setElementSrc('.today-condition-icon', todayConditionIcon);
    setElementContent('.tomorrow-high-temp', tomorrowHigh);
    setElementContent('.tomorrow-low-temp', tomorrowLow);
    setElementSrc('.tomorrow-condition-icon', tomorrowConditionIcon);
    setElementContent('.today-current-temp', currentTemp);
}
searchBtn.addEventListener('click', async () => {
    place = searchBar.value;
    const weatherData = await getWeather(place);
    console.log(weatherData);
});
getWeather('Foster City');
