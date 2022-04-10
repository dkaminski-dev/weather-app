import { createContext, useContext } from "react";
import { WeatherViewModel } from "../viewModel/weatherViewModel";

export const WeatherContext = createContext( new WeatherViewModel() );

export const useWeatherContext = () =>
{
    return useContext( WeatherContext );
}