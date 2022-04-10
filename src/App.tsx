import { observer } from "mobx-react";
import { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import './App.css';
import AppShell from "./components/AppShell/AppShell";
import { useWeatherContext } from "./state/weather";
import Overview from "./views/Overview";
import PollutionView from "./views/PollutionView";
import DetailView from "./views/PredictionView";

const PageBox = styled.div`
    display: flex;
    justify-content: center;
`;

const PageContent = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100vh;
    overflow: auto;
`;

const App = observer( () =>
{
    const weatherState = useWeatherContext();

    const ref = useRef<HTMLDivElement>( null );

    useLayoutEffect( () =>
    {
        ref.current?.scroll( { top: 0 } );
    }, [ weatherState.selectedView ] );

    return (
        <PageBox>
            <PageContent ref={ref}>
                <AppShell onHeaderClicked={() => weatherState.selectedView = "mainView"}>
                    {weatherState.selectedView === "mainView" && <Overview></Overview>}
                    {weatherState.selectedView === "predictionView" && <DetailView></DetailView>}
                    {weatherState.selectedView === "pollutionView" && <PollutionView></PollutionView>}
                </AppShell>
            </PageContent>
        </PageBox>
    )
} );

export default App
