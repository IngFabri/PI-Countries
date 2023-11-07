import { NavLink } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = ()=> {
    return (
        <div className={style.landingContainer}>
            <h1 className={style.title}>Explora los paises del mundo y descrubre sus actividades</h1>
            <button className={style.boton}>
                <NavLink to="/home" className={style.text}>Comencemos</NavLink>
            </button>
        </div>
    )
}

export default Landing;