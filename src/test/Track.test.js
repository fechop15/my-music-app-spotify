import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from "@testing-library/react";
import Track from "../component/Track";

test('Render track', () => {
    const track = {
        track: {
            album: {
                album_type: 'single',
                artists: [
                    {
                        external_urls: {
                            spotify: 'https://open.spotify.com/artist/4pnp4w9g30yLfVIAFnZMRd'
                        },
                        href: 'https://api.spotify.com/v1/artists/4pnp4w9g30yLfVIAFnZMRd',
                        id: '4pnp4w9g30yLfVIAFnZMRd',
                        name: 'ACRAZE',
                        type: 'artist',
                        uri: 'spotify:artist:4pnp4w9g30yLfVIAFnZMRd'
                    }
                ],
                id: '58cd90Jkrovggh556JPN9L',
                images: [
                    {
                        height: 640,
                        url: 'https://i.scdn.co/image/ab67616d0000b27384d413b195aac8a69cc6e5c6',
                        width: 640
                    }
                ],
                name: 'Do It To It',
                type: 'album',
            },
            artists: [
                {
                    external_urls: {
                        spotify: 'https://open.spotify.com/artist/4pnp4w9g30yLfVIAFnZMRd'
                    },
                    href: 'https://api.spotify.com/v1/artists/4pnp4w9g30yLfVIAFnZMRd',
                    id: '4pnp4w9g30yLfVIAFnZMRd',
                    name: 'ACRAZE',
                    type: 'artist',
                    uri: 'spotify:artist:4pnp4w9g30yLfVIAFnZMRd'
                },
                {
                    external_urls: {
                        spotify: 'https://open.spotify.com/artist/1c70yCa8sRgIiQxl3HOEFo'
                    },
                    href: 'https://api.spotify.com/v1/artists/1c70yCa8sRgIiQxl3HOEFo',
                    id: '1c70yCa8sRgIiQxl3HOEFo',
                    name: 'Cherish',
                    type: 'artist',
                    uri: 'spotify:artist:1c70yCa8sRgIiQxl3HOEFo'
                }
            ],
            duration_ms: 157890,
            href: 'https://api.spotify.com/v1/tracks/20on25jryn53hWghthWWW3',
            id: '20on25jryn53hWghthWWW3',
            name: 'Do It To It',
            popularity: 91,
            track: true,
            track_number: 1,
            type: 'track',
            uri: 'spotify:track:20on25jryn53hWghthWWW3'
        }
    }
    const component = render(<Track index='1' song={track}/>)
    component.getAllByText(track.track.name)
    component.getAllByText('2:38')
    component.getAllByText('ACRAZE,Cherish')
})