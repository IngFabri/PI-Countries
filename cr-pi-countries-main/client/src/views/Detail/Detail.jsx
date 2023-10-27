import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import style from "./Detail.module.css"

const Detail = ()=>{

    const {id} = useParams()
    const [countryInfo,setCountryInfo] = useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/countries/${id}`)
        .then(response=>setCountryInfo(response.data))
    },[])

    if (Object.keys(countryInfo).length > 0) return (
        <div className={style.contenedor}>
            <h1>Name: {countryInfo?.officialName}</h1>
            <img src={countryInfo?.image[1]} alt={`${countryInfo?.commonName} flag`} className={style.image}/>
            <div>
                <p>Continent: {countryInfo.continent}</p>
                <p>Capital: {countryInfo.capital}</p>
                <p>Subregion: {countryInfo.subregion}</p>
                <p>Area: {countryInfo.area}</p>
                <p>Population: {countryInfo.population}</p>
            </div>
                <h3>Activities: </h3>
                {countryInfo.Activities?.length !== 0 ? countryInfo.Activities?.map(activity=>(
                    <div>
                        <h4>Name: {activity.name}</h4>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration: {activity.duration}hs</p>
                        <p>Season: {activity.season}</p>
                        <p>Description: {activity.description}</p>
                    </div>
                )) :
                <p>No activities available at the moment.</p>
                }

        </div>
    )
}

export default Detail;