import React from 'react';
import {useSelector} from "react-redux";
import {getFavoriteList} from "../reducers/FavoriteListReducer";
import PlayList from "../component/PlayList";
import {getUser} from "../reducers/UserReducer";

function FavoritePage(props) {
    const FavoriteList = useSelector(getFavoriteList)
    const user = useSelector(getUser)

    console.log(FavoriteList)
    return (
        <>
            {FavoriteList &&
            <PlayList playList={FavoriteList} favorite={true} owner={user.display_name} image={'./favoritos.png'}
                      name={'Canciones que te gustan'}/>
            }
        </>);
}

export default FavoritePage;