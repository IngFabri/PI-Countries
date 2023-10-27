import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css"
import filter from "../../redux/utils/filter";

const CardsContainer = ()=>{

    const countries = useSelector(state=>state.countries);
    const filteredCountries = useSelector(state=>state.filteredCountries);

    const [currentPage,setCurrentPage] = useState(1)
    useEffect(()=>{
        setCurrentPage(1)
    },[filteredCountries])

    const countriesToShow = filteredCountries
    const lastCountryIndex = currentPage * 10;
    const firstCountryIndex = lastCountryIndex - 10;
    const currentCountries = countriesToShow.slice(firstCountryIndex,lastCountryIndex)
    const maxPage = Math.ceil(countriesToShow.length / 10)

    const handleClick = (event)=>{
        if(event.target.name === "prevPage"){
            setCurrentPage(currentPage - 1)
        }else{
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div>
            <div className={style['cards-container']}>
                {filteredCountries.length === 0 && <h3>No countries found.</h3>}
                {currentCountries.map(country => {
                    return <Card image={country.image} name={country.commonName} continent={country.continent} key={country.id} id={country.id}/>
                })}
            </div>
            <div>
            {currentPage > 1 && <button name="prevPage" onClick={handleClick}>Prev Page</button>}
            {(maxPage > 1 && currentPage < maxPage) && <button name="nextPage" onClick={handleClick}>Next Page</button>}
            </div>
        </div>
    )
}

export default CardsContainer;