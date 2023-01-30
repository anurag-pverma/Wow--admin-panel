
import * as types from './actionType'

const initalState = {
    entry:[],
    isloading: false,
    isError:false
}

export const reducer = (state=initalState, action)=>{
    const {type,payload} = action;
    switch (type) {
        case types.GET_ENTRY_SUCCESS:
            return {
                ...state,
                entry:payload
            }
        case types.GET_ENTRY_FAILURE:
            return{
                ...state,
                isError:false
            }
    
        default:
            return state
    }
}