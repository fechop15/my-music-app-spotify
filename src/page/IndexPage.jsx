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
            <Box>
                {/*<p>Bienvenido {currentUser.email}</p>*/}
                {/*{user &&*/}
                {/*<Zoom in={true} style={{ transitionDelay:'500ms' }}>*/}
                {/*    <p>Nombre: {user.display_name}</p>*/}
                {/*</Zoom>*/}
                {/*}*/}
            </Box>
            <PlayList playList={playList}/>

        </Box>
    );
}

export default IndexPage;