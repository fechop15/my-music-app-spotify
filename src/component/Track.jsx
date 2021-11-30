import React from 'react';
import {Box, CardMedia, Grid, IconButton, Paper, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {red} from "@mui/material/colors";

function Track({song,index,like=false}) {
    function getArtistsText() {
        let array=[];
        for (let i in song.track.artists){
            array.push(song.track.artists[i].name)
        }
        return array.toString();
    }
    function msToMin(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }
    return (
        <Paper sx={{my:"10px"}}>
        <Grid container sx={{alignItems:"center",my:"1px"}}>
            <Grid item xs={7} sx={{pr:3}}>
                <Box sx={{display:"flex",alignItems:"center"}}>
                    <Typography sx={{px:1,alignSelf:"center"}} width={25} textAlign="center">{index}</Typography>
                    <CardMedia sx={{width:"50px",mx:1}}
                        height="50"
                        component="img"
                        image={song.track.album.images[0].url}
                        alt={song.track.album.name}
                    />
                    <Box>
                        <Typography component="div" variant="h6" className="text-one-line" lineHeight="1">
                            {song.track.name}
                        </Typography>
                        <Typography className="text-one-line" variant="subtitle1" color="text.secondary" component="div">
                            {getArtistsText()}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Typography className="text-one-line">{song.track.album.name}</Typography>
            </Grid>
            <Grid item xs={1} textAlign={"center"}>
                <IconButton aria-label="add to favorites">
                    {like?<FavoriteIcon sx={{ color: red[500] }}/>:<FavoriteIcon/>}
                </IconButton>
                <Typography className="text-one-line">{msToMin(song.track.duration_ms)}</Typography>
            </Grid>
        </Grid>
        </Paper>
    );
}

export default Track;