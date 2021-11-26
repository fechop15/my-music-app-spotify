import React from 'react';
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Container,
} from "@mui/material";
import {authSpotify} from "../api/spotify";

function SpotifyLogin(props) {
    return (
        <Box className="loginPage">
            <Container component="main" maxWidth="md">
                <Alert severity="warning">
                    <AlertTitle>Advertencia</AlertTitle>
                    Para continuar sincroniza tu cuenta con  <strong>Spotify</strong>
                    <Button href={authSpotify()}
                            sx={{mt: 2}}
                            fullWidth
                            variant="contained"
                            color="success"
                    >
                        Sincronizar con Spotify
                    </Button>
                </Alert>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                </Box>
            </Container>
        </Box>
    );
}

export default SpotifyLogin;