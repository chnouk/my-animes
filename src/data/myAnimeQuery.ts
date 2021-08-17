import { useQuery } from "react-query";
import { myAnimeApi } from "./myAnimeApi";

export const useQueryTopAnime = () => {
    return useQuery(['top-anime'], () => myAnimeApi.loadTopAnime());
}