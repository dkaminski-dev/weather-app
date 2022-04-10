import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { observer } from "mobx-react";
import styled from "styled-components";
import { useWeatherContext } from "../state/weather";

interface Props
{
}

const SelectBox = styled.div`
    display: flex;
    justify-content: center;
`;

const SelectContent = styled.div`
    padding: 20px;
    max-width: 500px;
    width: 100%;
`;

const LocationSelect = observer( () =>
{
    const weatherState = useWeatherContext();

    return (
        <SelectBox>
            <SelectContent>
                <FormControl fullWidth>
                    <InputLabel id="selectLabelId">Standort</InputLabel>
                    <Select
                        labelId="selectLabelId"
                        id="selectId"
                        value={weatherState.currentLocationIndex}
                        label="Standort"
                        onChange={( e ) =>
                        {
                            weatherState.currentLocationIndex = Number.parseInt( e.target.value.toString() );
                        }}
                    >
                        {weatherState.availableLocations.map( ( location, index ) =>
                        {
                            return (
                                <MenuItem value={index}>{location.name}</MenuItem>
                            )
                        } )}
                    </Select>
                </FormControl>
            </SelectContent>
        </SelectBox>
    );
} );

export default LocationSelect;