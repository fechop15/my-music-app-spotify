import axios from 'axios'
const baseUrl = "https://api.spotify.com/v1";
const CLIENT_ID="96bf8321208547a8834d4e73a5249853";
//const CLIENT_SECRET="9f3bfe4f2e3e445681f099ebf7d2482f";
const loginURL=`https://accounts.spotify.com/authorize`;
const redirectUri=`http://localhost:3000/`;

export const apiCall = (url, data, header, method) => axios({
    method,
    url: baseUrl + url,
    data,
    header
});

export const getTokenFromURL=()=>{
    //extrar token del url enviada por spotify
    return window.location.hash.substring(1).split("&").reduce((initial,item)=>{
            let parts=item.split("=")
            initial[parts[0]]=decodeURIComponent(parts[1])
            return initial;
        },{});
}

export const authSpotify=()=>{
    return `${loginURL}?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true&scope=user-library-modify%20user-library-read`;
};