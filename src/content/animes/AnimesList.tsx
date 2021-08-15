import { Box, Button } from '@material-ui/core';
import React from 'react';
// import { useGetQueryByUrl } from '../../helper/queryHelper';
import axios from 'axios'

const AnimesList = () => {

    // var query = useGetQueryByUrl('https://cdn.animenewsnetwork.com/encyclopedia/reports.xml?id=155&nlist=all');

    // const thecode="def502003bc86951cf0ef1a963429d8c16a2b5fccc7d3e4aec6b33d2e47477ab6ea17a4becdf716677ede6161c2ae851ed6d3869b434a06c2c1f99ec5c9fe4bfe53f11c6917234d7ff64768c91923d53b728770b07cb2b7c321ed56ddd45a31fb3be5cd436c95e6acf25695a6b6f369b7a7b970345a936267ce2c5d7a76f82c912afb53014411abbb5ba0c22b52c3c25498d42fc38e1ae17d100b8ee9ec1c1c4bde3c6915fa643d051f32cf40140bcd829ae109da25bf139c81f2d59d069bbf1e752663f47357df9d952ccd5ed94451c9d0819119693dd7efe3b799c0be330156375254ac221ab36a0386d29830396661bd31d8e1196d2b6640f64160c432cd421eb797d7ebbfeba6d6c869b0aa2bc38777ac17ec102336c985d9dd6cacda204a9ce15394db91d51d78244c3fd2813b49a7c887e01b347c6039b22af1f474b25f1a897fa33f7103f9e237adb3b235a07d123d33f9c6b2b4223792261fe5d424bb6fd432876063c133bd47ff105c392b55dc28a7e7a190adcbda76d133032b0d3f459bd8b72363c67239b7e060dfb39791c134450ee07f22a23dd79ad2cca6d35b96c303c95b68e458492232270db98317b02895df9d2c9be5c9ca56c2a3c515d1d90fc4ecd47b761baa0681dec756ff7d5fafeb012b7ce212c0f5e44ebb8f2eb77c3444565b63d97314d"


    const onGetData = () => {

        axios.request({
            baseURL: "http://localhost:3000",
            url: "https://myanimelist.net/v1/oauth2/authorize",
            
            method: "GET",
            
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-Type': 'application/json;charset=utf-8'
              },
            params: {
                response_type: "code",
                client_id: "1f44b266681dec6f72ea4d906d159b2e",
                code_challenge: "X8sJQrn2KmWHEoV2XdhX4zd6ESdBFlagzd2QGi0R_5VhDMbVzwNEFcAkRf5e3-zBcJ8UyaI0byfxTF3EN15zk2UVRsO98bCIyoTSJlK8Bl_MRQQfHMWW0mbVrg4j4q_s",
                state: "my-anime-authorize-state"
            }
          }).then(response => {
            console.log("authorize response", response);  
          }); 


        // axios.request({
        //     url: "/oauth2/token",
        //     method: "post",
        //     baseURL: "https://myanimelist.net/v1/",
        //     headers: {
        //         'Access-Control-Allow-Origin': 'true',
        //         // 'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        //     },            
        //     params: {
        //         client_id: "1f44b266681dec6f72ea4d906d159b2e",
        //         client_secret: "32157fded0609cbc8b28dd1fcb7fd32fa37be4c4421147ea2de9004c7a3f7c43",
        //         code: {thecode},
        //         code_verifier: "X8sJQrn2KmWHEoV2XdhX4zd6ESdBFlagzd2QGi0R_5VhDMbVzwNEFcAkRf5e3-zBcJ8UyaI0byfxTF3EN15zk2UVRsO98bCIyoTSJlK8Bl_MRQQfHMWW0mbVrg4j4q_s",
        //         grant_type: "authorization_code"
        //     }
        //   }).then(respose => {
        //     console.log(respose);  
        //   }); 

    }



    return (
        <>
        <Button onClick={() => onGetData()}>Get Data</Button>
        <Box>AnimesSearchPage</Box>
        </>
    )

}

export default AnimesList