import React from 'react';
import {useSelector} from "react-redux";
import {Box, Grid, Skeleton, styled, Typography, Zoom} from "@mui/material";
import Track from "../component/Track";
import {getFavoriteList} from "../reducers/FavoriteListReducer";
import {getPlayList} from "../reducers/PlayListReducer";
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
function FavoritePage(props) {
    const FavoriteList = useSelector(getFavoriteList)
    const playList = useSelector(getPlayList)
    console.log(FavoriteList)
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
                                    <Typography variant="h7" className="uppercase text-bold">
                                        playList
                                    </Typography>
                                    <Typography variant="h2" className="text-bold">
                                        Tus me gusta
                                    </Typography>
                                    <Typography>
                                        {playList.owner.display_name}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {playList.tracks.total} canciones, {playList.followers.total} Seguidores
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{width: "100%"}}>
                                    {playList.tracks.items.map((value, index) =>(
                                        <Track song={value} index={index+1} key={index}></Track>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Zoom>}
        </>);
}

export default FavoritePage;