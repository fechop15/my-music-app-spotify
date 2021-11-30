import React from 'react';
import {Box} from "@mui/material";
import {useSelector} from "react-redux";
import PlayList from "../component/PlayList";
import {getPlayList} from "../reducers/PlayListReducer";

function IndexPage(props) {
    console.log("index")

    const playList = useSelector(getPlayList)
    return (
        <Box>
            {playList&&
            <PlayList playList={playList}/>
            }
        </Box>
    );
}

export default IndexPage;