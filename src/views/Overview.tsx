import { observer } from "mobx-react";
import { useEffect } from "react";
import MainList from "../components/List/MainList";
import MainListItem from "../components/List/MainListItem";
import { useWeatherContext } from "../state/weather";

interface Props
{
}
const Overview = observer( ( props: Props ) =>
{
    const weatherState = useWeatherContext();

    useEffect( () =>
    {
        ( async () =>
        {
            const promises = weatherState.availableLocations.map( location =>
            {
                return weatherState.loadDataForLocation( location );
            } );

            // TODO: Proper error handling ;-)
            try
            {
                await Promise.all( promises );
            }
            catch ( error )
            {
                alert( error );
            }
        } )();
    }, [] );

    return (
        <MainList>
            {weatherState.availableLocations.map( location =>
            {
                const data = weatherState.currentWeatherData.get( location );

                if ( data === undefined )
                {
                    return <>Loading...</>
                }

                const detailData = new Map<string, string>();
                detailData.set( "Temperatur:", data.main.temp.toString() + " °C" );
                detailData.set( "Min:", data.main.temp_min.toString() + " °C" );
                detailData.set( "Max:", data.main.temp_max.toString() + " °C" );
                detailData.set( "Feuchtigkeit:", data.main.humidity.toString() );

                return (
                    <MainListItem title={location.name} description={data.weather[ 0 ].description} details={detailData} actions={[
                        {
                            title: "Vorschau", clicked: () =>
                            {
                                weatherState.currentLocationIndex = weatherState.availableLocations.indexOf( location );
                                weatherState.selectedView = "predictionView";
                            }
                        },
                        {
                            title: "Verschmutzung", clicked: () =>
                            {
                                weatherState.currentLocationIndex = weatherState.availableLocations.indexOf( location );
                                weatherState.selectedView = "pollutionView";
                            }
                        }
                    ]} />
                );
            } )}
        </MainList>
    );
} );

export default Overview;