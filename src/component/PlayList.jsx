import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Skeleton,
    styled,
    Typography,
    Zoom
} from "@mui/material";
import {useSelector} from "react-redux";
import {getPlayList} from "../reducers/PlayListReducer";
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
function PlayList(props) {
    const playList = useSelector(getPlayList)
    return (
        <>
            {!playList ?
                <Skeleton variant="rectangular" height={400}/>
                :
                <Zoom in={true} style={{transitionDelay: '500ms'}}>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box sx={{width: "100%"}}>
                                    <Img src={playList.images[0].url} alt={playList.name}/>
                                </Box>
                            </Grid>
                            <Grid item xs={8} sx={{margin:"auto"}}>
                                <Box>
                                    <Typography className="uppercase text-bold">
                                        {playList.type}
                                    </Typography>
                                    <Typography variant="h2" className="text-bold">
                                        {playList.name}
                                    </Typography>
                                    <Typography>
                                        {playList.owner.display_name}
                                    </Typography>
                                    <Typography>
                                        {playList.tracks.total} canciones, {playList.followers.total} Seguidores
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{width: "100%"}}>
                                    <Img src={playList.images[0].url} alt={playList.name}/>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Zoom>}
        </>

    );
}

export default PlayList;