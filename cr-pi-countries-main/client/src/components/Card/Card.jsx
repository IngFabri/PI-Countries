import { NavLink } from "react-router-dom";
import style from "./Card.module.css"

const Card = ({image,name,continent,id})=>{
    return (
        <div className={style.card}>
            <img src={image[0]} alt={`${name} flag`} className={style.img}/>
            <h3 className={style.h3}>Country: <NavLink to={`/detail/${id}`}>{name}</NavLink></h3>
            <h3 className={style.h3}>Continent: {continent}</h3>
        </div>
    )
}

export default Card;