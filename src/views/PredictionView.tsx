import { observer } from "mobx-react";
import MainList from "../components/List/MainList";
import MainListItem from "../components/List/MainListItem";
import { useWeatherContext } from "../state/weather";
import LocationSelect from "./LocationSelect";

interface Props
{

}

const PredictionView = observer( ( props: Props ) =>
{
    const weatherState = useWeatherContext();

    return (
        <>
            <LocationSelect></LocationSelect>
            <MainList>
                {weatherState.predictionData.get( weatherState.currentLocation )?.daily.map( day =>
                {
                    const detailData = new Map<string, string>();
                    detailData.set( "Temperatur:", day.temp.day.toString() + " °C" );
                    detailData.set( "Min:", day.temp.min.toString() + " °C" );
                    detailData.set( "Max:", day.temp.max.toString() + " °C" );
                    detailData.set( "Feuchtigkeit:", day.humidity.toString() );

                    return (
                        <MainListItem title={new Date( day.dt * 1000 ).toLocaleDateString()} description={day.weather[ 0 ].description} details={detailData} actions={[]} />
                    );
                } )}
            </MainList>
        </>
    );
} );

export default PredictionView;