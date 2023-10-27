const InitialState = {
    countries:[],
    activities:[],
    filteredCountries:[]
}

import { GET_COUNTRIES,FILTER_AND_ORDER,GET_ACTIVITIES,SEARCH,CREATE_ACTIVITY } from "./action-types";
import filter from "./utils/filter"
import order from "./utils/order"


const reducer = (state=InitialState, {type,payload})=>{
    switch(type){

        case GET_COUNTRIES: 
            return {...state,countries:payload,filteredCountries:payload}
        
        case GET_ACTIVITIES:
            return {...state,activities:payload}

        case FILTER_AND_ORDER:
            const filteredCountries = filter([...state.countries],payload.continent,payload.difficulty,payload.activities)
            const orderedCountries = order(filteredCountries,payload.order)
            return {...state, filteredCountries:orderedCountries}

        case SEARCH:
            return {...state, filteredCountries:payload}

        case CREATE_ACTIVITY:
            return {...state,activities:[...state.activities,payload]}

        default : return {...state}
    }
}

export default reducer;