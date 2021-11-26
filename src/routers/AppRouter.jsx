import React, {Suspense} from 'react';
import {Redirect, Switch} from "react-router-dom";
import Navbar from "../component/Navbar";
import {Box, CircularProgress} from "@mui/material";

import SpotifyLogin from "../page/SpotifyLogin";
import IndexPage from "../page/IndexPage";
import FavoritePage from "../page/FavoritePage";
import {SpotifyRouterPrivate, SpotifyRouterPublic} from "./SpotifyRouter";

const AppRouter = () => {
    return (
        <>
            <Navbar>
                <Suspense fallback={
                    <Box sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <CircularProgress color="inherit"/>
                    </Box>
                }>
                    <Switch>
                        <SpotifyRouterPublic exact path="/" component={SpotifyLogin}/>
                        <SpotifyRouterPrivate exact path="/index" component={IndexPage}/>
                        <SpotifyRouterPrivate exact path="/favorite" component={FavoritePage}/>
                        <Redirect to="/"/>
                    </Switch>
                </Suspense>
            </Navbar>

        </>
    );
}

export default AppRouter;