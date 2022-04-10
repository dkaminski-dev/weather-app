import { computed, makeObservable, observable } from "mobx";
import { CurrentWeatherResponse } from "../interfaces/currentWeather";
import { Location } from "../interfaces/location";
import { PollutionResponse } from "../interfaces/pollution";
import { PredictionResponse } from "../interfaces/prediction";
import { WeatherService } from "../services/weatherService";

export type Views = "mainView" | "predictionView" | "pollutionView";

export class WeatherViewModel
{
    public readonly availableLocations: Location[] = [];

    @observable
    public readonly currentWeatherData: Map<Location, CurrentWeatherResponse | undefined> = new Map();
    @observable
    public readonly predictionData: Map<Location, PredictionResponse | undefined> = new Map();
    @observable
    public readonly pollutionData: Map<Location, PollutionResponse | undefined> = new Map();

    @observable
    public selectedView: Views = "mainView";

    @observable
    public currentLocationIndex = 0;

    @computed
    public get currentLocation()
    {
        if ( this.currentLocationIndex < 0 || this.currentLocationIndex > this.availableLocations.length )
        {
            return this.availableLocations[ 0 ];
        }

        return this.availableLocations[ this.currentLocationIndex ];
    }

    private weatherService = new WeatherService();

    constructor()
    {
        this.availableLocations = [
            { name: "Bruchsal", lat: 49.125801, lon: 8.597680 },
            { name: "Frankfurt", lat: 50.110924, lon: 8.682127 },
            { name: "Berlin", lat: 52.520008, lon: 13.404954 },
            { name: "Hamburg", lat: 53.551086, lon: 9.993682 },
            { name: "München", lat: 48.135124, lon: 11.581981 },
        ];

        this.availableLocations.forEach( location =>
        {
            this.currentWeatherData.set( location, undefined );
        } );

        makeObservable( this );
    }

    public loadDataForLocation( location: Location )
    {
        const promises: Promise<any>[] = [];
        promises.push( this.weatherService.getCurrentWeather( location ).then( response =>
        {
            this.currentWeatherData.set( location, response );
        } ) );

        promises.push( this.weatherService.getPrediction( location ).then( response =>
        {
            this.predictionData.set( location, response );
        } ) );

        promises.push( this.weatherService.getPollution( location ).then( response =>
        {
            this.pollutionData.set( location, response );
        } ) );

        return Promise.all( promises );
    }
}