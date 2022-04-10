import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Drawer as MuiDrawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useRef, useState } from "react";
import styled from "styled-components";
import { useWeatherContext } from "../../state/weather";
import { Views } from "../../viewModel/weatherViewModel";
import { Drawer } from "../Drawer/Drawer";
import { DrawerItem } from "../Drawer/DrawerItem";

interface Props
{
    children: React.ReactNode;
    onHeaderClicked?: () => void;
}

const ContentBox = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const AppShell = ( props: Props ) =>
{
    const weatherState = useWeatherContext();
    const drawerAnchorRef = useRef<HTMLButtonElement>( null );

    const [ drawerOpen, setDrawerOpen ] = useState( false );

    const toggleDrawer = () =>
    {
        setDrawerOpen( open => !open );
    }

    const onItemClicked = ( view: Views ) =>
    {
        weatherState.selectedView = view;
        setDrawerOpen( false );
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            ref={drawerAnchorRef}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Wetter
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <ContentBox>
                {props.children}
            </ContentBox>
            <MuiDrawer
                anchor={"left"}
                open={drawerOpen}
                onClose={() => setDrawerOpen( false )}
            >
                <Drawer>
                    <DrawerItem text="Hauptseite" icon={<MenuIcon />} clickAction={() => onItemClicked( "mainView" )}></DrawerItem>
                    <DrawerItem text="7-Tage-Vorschau" icon={<MenuIcon />} clickAction={() => onItemClicked( "predictionView" )}></DrawerItem>
                    <DrawerItem text="Luftverschmutzung" icon={<MenuIcon />} clickAction={() => onItemClicked( "pollutionView" )}></DrawerItem>
                </Drawer>
            </MuiDrawer>
        </>
    );
}

export default AppShell;