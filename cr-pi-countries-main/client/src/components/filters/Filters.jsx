import { useDispatch,useSelector } from "react-redux";
import { filterAndOrder} from "../../redux/actions";
import { useState } from "react";
import style from "./Filters.module.css"

const Filters = ()=>{
    const dispatch = useDispatch()
    const [changes,setChanges] = useState(
        {
            continent:"all",
            activities:"",
            dfficulty:"",
            order:"a-z"
        }
    )

    const handleChanges = (event)=>{
        setChanges({...changes,[event.target.name]:event.target.value})
    }

    const handleClick = ()=>{
        dispatch(filterAndOrder(changes))
    }

    return (
        <div className={style.filters}>
            <h2>Filters:</h2>
            <h3>Continents</h3>
            <select name="continent" id="continent" onChange={handleChanges}>
                <option value="all">All</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                <option value="Asia">Asia</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Antarctica">Antarctica</option>
            </select>

            <h3>Activities</h3>
            <select name="activities" onChange={handleChanges}>
                <optgroup label="Just countries with activities">
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </optgroup>
            </select>

            {changes.activities === "yes" && 
                <div>
                    <h4>Difficulty:</h4>
                    <select>
                        <option value="all">All</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                }
            
            <h3>Order By</h3>
            <select name="order" id="order" onChange={handleChanges}>
                <optgroup label="Name">
                <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </optgroup>
                <optgroup label="Population">
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </optgroup>
            </select>
            <button onClick={handleClick}>Apply filters</button>
        </div>
    )
}

export default Filters;