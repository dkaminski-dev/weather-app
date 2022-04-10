export interface PollutionResponse
{
    list: PollutionData[];
}

export interface PollutionData
{
    dt: number;
    main: {
        aqi: number;
    };
    components: PollutionComponents;
}

export interface PollutionComponents
{
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
}

export const AirQualityText = [ "Gut", "Zufriedenstellend", "Mäßig verschmutzt", "Schlecht", "Sehr schlecht" ];