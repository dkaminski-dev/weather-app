import { observer } from "mobx-react";
import MainListItem from "../components/List/MainListItem";
import { AirQualityText } from "../interfaces/pollution";
import { useWeatherContext } from "../state/weather";
import LocationSelect from "./LocationSelect";

interface Props
{
}

const PollutionView = observer( ( props: Props ) =>
{
    const weatherState = useWeatherContext();

    const data = weatherState.pollutionData.get( weatherState.currentLocation );

    if ( data === undefined )
    {
        return <>Loading...</>;
    }

    const detailData = new Map<string, string>();
    detailData.set( "co", data?.list[ 0 ].components.co.toString() );
    detailData.set( "no", data?.list[ 0 ].components.no.toString() );
    detailData.set( "no2", data?.list[ 0 ].components.no2.toString() );
    detailData.set( "o3", data?.list[ 0 ].components.o3.toString() );
    detailData.set( "so2", data?.list[ 0 ].components.so2.toString() );
    detailData.set( "pm2_5", data?.list[ 0 ].components.pm2_5.toString() );
    detailData.set( "pm10", data?.list[ 0 ].components.pm10.toString() );
    detailData.set( "nh3", data?.list[ 0 ].components.nh3.toString() );

    return (
        <>
            <LocationSelect></LocationSelect>
            <MainListItem title={weatherState.currentLocation.name} description={`${data?.list[ 0 ].main.aqi.toString()} - ${AirQualityText[ data?.list[ 0 ].main.aqi - 1 ]}`} details={detailData} actions={[]} />
        </>
    );
} );

export default PollutionView;