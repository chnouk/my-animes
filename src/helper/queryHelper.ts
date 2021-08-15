import axios from 'axios';
import { QueryClient } from 'react-query';
import { useQuery } from "react-query";

const getByUrl = async (url: string) => {
    // const { data } = await axios.get(url);

    let data = await fetch(url, { mode: 'no-cors'}).then((data) => data.json())

    console.log("getByUrl", data);

    // const data = await response.json()

    // console.log("getByUrl", response);

    // console.log("getByUrl", data);

    return data;



}

export const prefetchQueryByUrl = (queryClient: QueryClient, url: string) => {
    queryClient.prefetchQuery(url, () => getByUrl(url))
}

export const useGetQueryByUrl = (url: string) => {
    return useQuery(
        url, 
        
        () => getByUrl(url),


        {
            enabled: false
        }
    );
}
