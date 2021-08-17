
const jikanjs  = require('jikanjs');

class MyAnimeApi {

    loadTopAnime = (page: number = 1) => {
        return jikanjs.loadTop('anime', page).then((response: any) => response.top)
    }

    loadTopManga = (page: number = 1) => {
        return jikanjs.loadTop('manga', page).then((response: any) => response.top)
    }

}

export const myAnimeApi = new MyAnimeApi()
