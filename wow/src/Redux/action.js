import * as types from './actionType';
import axios from "axios"


export const getEntryData=()=>(dispatch)=>{
   return axios.get(`https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10`)
    .then((res)=>{
       return dispatch({type:types.GET_ENTRY_SUCCESS,payload:res.data.data})
    }).catch((error)=>{
        dispatch({type: types.GET_ENTRY_FAILURE,payload:error})
    })
}