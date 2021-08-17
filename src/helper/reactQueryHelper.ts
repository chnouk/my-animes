import { QueryKey, useQuery, UseQueryResult } from "react-query";

export const useQueryArray = <Type> (
    key: QueryKey,
    apiToCall: () => Promise<Array<Type>>,
    convertFn: (data: Type) => Type = (data: Type) => data
) : UseQueryResult<Array<Type>> => {

    const query = useQuery<Array<Type>>(key, apiToCall, {
        select: (data: Array<Type>) => data.map((rec: Type) => convertFn(rec)),
        enabled: false
    });

    return query
}


// const extractDataObject = <Type>(query: UseQueryResult<Type | null>) : Type => {
//     const data = isNull(query.data) || isEmpty(query.data) || isUndefined(query.data) ? {} as Type : query.data
//     return data
// }

// interface UseQueryObjectResult<Type> {
//     data: Type,
//     isLoading: boolean
// }

// export const UseQueryObject = <Type> (
//     key: string | QueryKey,
//     apiToCall: () => Promise<Type>,
//     convertFn: (data: Type) => Type,
//     typeName: string
// ) : UseQueryObjectResult<Type> => {

//     const alert = useAlert();

//     const query = useQuery<Type>(key, apiToCall, {

//         onError: (error) => {
//             alert.error(`Error while fetching ${typeName}`)
//         },

//         select: (data: Type) => convertFn(data)

//     });

//     return {
//         data: extractDataObject<Type>(query),
//         isLoading: query.isLoading
//     }

// }
