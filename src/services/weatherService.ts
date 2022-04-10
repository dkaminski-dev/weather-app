import { API_KEY } from "../constants";
import { CurrentWeatherResponse } from "../interfaces/currentWeather";
import { Location } from "../interfaces/location";
import { PollutionResponse } from "../interfaces/pollution";
import { PredictionResponse } from "../interfaces/prediction";

export class WeatherService
{
    public async getCurrentWeather( location: Location )
    {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&lang=de&units=metric`;

        const response = await fetch( url );
        const data = ( await response.json() ) as CurrentWeatherResponse;
        return data;
    }

    public async getPrediction( location: Location )
    {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&lang=de&units=metric&exclue=current,minutely,hourly,alerts`;

        const response = await fetch( url );
        const data = ( await response.json() ) as PredictionResponse;
        return data;
    }

    public async getPollution( location: Location )
    {
        const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`;

        const response = await fetch( url );
        const data = ( await response.json() ) as PollutionResponse;
        return data;
    }
}
