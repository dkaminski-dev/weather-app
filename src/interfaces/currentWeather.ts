export interface CurrentWeatherResponse
{
    weather: WeatherDescription[];
    main: Main;
}

export interface WeatherDescription
{
    id: number;
    main: string;
    description: string;
}

export interface Main
{
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}