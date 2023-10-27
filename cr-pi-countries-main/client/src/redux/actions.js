import { GET_COUNTRIES,FILTER_AND_ORDER,GET_ACTIVITIES,SEARCH,CREATE_ACTIVITY } from "./action-types";
import axios from "axios"

export const getCountries = ()=>{
    return async (dispatch)=>{
        try {
            const countries = await axios("http://localhost:3001/countries").then(response => response.data)
            return dispatch({type: GET_COUNTRIES, payload:countries})
        } catch (error) {
            throw Error(error.message)
        }
    }
}

export const getActivities = ()=>{
    return async (dispatch)=>{
        try {
            const activities = await axios("http://localhost:3001/activities").then(response=>response.data)
            dispatch({type:GET_ACTIVITIES, payload:activities})
        } catch (error) {
            throw Error(error.message)
        }
    }
} 

export const filterAndOrder = (targets)=>{
    return {type: FILTER_AND_ORDER, payload:targets}
}


export const search = (name)=>{
    return async (dispatch)=>{
        try {
            const searchCountries = await axios(`http://localhost:3001/countries?name=${name}`).then(response=>response.data)
            dispatch({type:SEARCH,payload:searchCountries})
        } catch (error) {
            throw Error(error.message)
        }
    }
}

export const createActivity = (activity) => {
    return async (dispatch)=>{
        try {
            const createdActivity = await axios.post("http://localhost:3001/activities",activity).then(response => response.data)
            dispatch({type:CREATE_ACTIVITY,payload:createdActivity})
        } catch (error) {
            throw Error(error.message)
        }
    }
}