const InitialState = {
    countries:[],
    activities:[],
    filteredCountries:[]
}

import { GET_COUNTRIES } from "./action-types";

const reducer = (state=InitialState, {type,payload})=>{
    switch(type){

        case GET_COUNTRIES: 
            return {...state,countries:payload}

        default : return {...state}
    }
}

export default reducer;