import './style.css';

const apiKey = '75b9a99ff5ee4179b7c175556230910';
const searchBar = document.querySelector('#search-input');
const searchBtn = document.querySelector('.search-btn');

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
    return {
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
    };
}

searchBtn.addEventListener('click', async () => {
    const city = searchBar.value;
    const weatherData = await getWeather(city);
    console.log(weatherData);
});

console.log(getWeather('Foster City'));
