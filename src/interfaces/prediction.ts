import { WeatherDescription } from "./currentWeather";

export interface PredictionResponse
{
    daily: WeatherData[];
}

export interface WeatherData
{
    dt: number,
    temp: TemperatureData,
    humidity: number,
    weather: WeatherDescription[];
}
export interface TemperatureData
{
    day: number;
    min: number;
    max: number;
}
