import React from 'react';
import {
    Box,
    Grid,
    Skeleton,
    styled,
    Typography,
} from "@mui/material";
import Track from "./Track";
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
function PlayList({playList,name=null,image=null,owner=null,favorite=false}) {
    const imagePlayList=image??playList.images[0].url
    const nameplayList=name??playList.name
    const ownerPLayList=owner??playList.owner.display_name
    const totalPLayList=playList.total??playList.tracks?.total
    const tracksPLayList=playList.items??playList.tracks.items

    return (
        <>
            {!playList ?
                <Skeleton variant="rectangular" height={400}/>
                :
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Box sx={{width: "100%"}}>
                                    <Img src={imagePlayList} alt={nameplayList}/>
                                </Box>
                            </Grid>
                            <Grid item xs={8} sx={{margin:"auto"}}>
                                <Box>
                                    <Typography variant="h7" className="uppercase text-bold">
                                        {playList.type??'playlist'}
                                    </Typography>
                                    <Typography variant="h2" className="text-bold">
                                        {nameplayList}
                                    </Typography>
                                    <Typography>
                                        {ownerPLayList}
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary">
                                        {totalPLayList+' canciones'}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{width: "100%"}}>
                                    {tracksPLayList.map((value, index) =>(
                                        <Track song={value} index={index+1} key={index} like={favorite}></Track>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                }
        </>

    );
}

export default PlayList;