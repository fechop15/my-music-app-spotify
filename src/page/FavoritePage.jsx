import React from 'react';
import {useSelector} from "react-redux";
import {Box, Grid, Skeleton, styled, Typography, Zoom} from "@mui/material";
import Track from "../component/Track";
import {getFavoriteList} from "../reducers/FavoriteListReducer";
import {getPlayList} from "../reducers/PlayListReducer";
import PlayList from "../component/PlayList";
import {getUser} from "../reducers/UserReducer";
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
function FavoritePage(props) {
    const FavoriteList = useSelector(getFavoriteList)
    const user=useSelector(getUser)

    console.log(FavoriteList)
    return (
        <>
            <PlayList playList={FavoriteList}  favorite={true} owner={user.display_name} image={'./favoritos.png'} name={'Canciones que te gustan' }/>
        </>);
}

export default FavoritePage;