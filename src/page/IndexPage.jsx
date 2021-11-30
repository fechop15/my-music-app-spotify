import React from 'react';
import {Box,Container, Zoom} from "@mui/material";
import {useAuth} from "../contexts/AuthContext";
import {useSelector} from "react-redux";
import {getUser} from "../reducers/UserReducer";
import PlayList from "../component/PlayList";
import {getPlayList} from "../reducers/PlayListReducer";

function IndexPage(props) {
    console.log("index")

    const {currentUser} = useAuth();
    const user=useSelector(getUser)
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