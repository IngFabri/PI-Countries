import { GET_COUNTRIES } from "./action-types";
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