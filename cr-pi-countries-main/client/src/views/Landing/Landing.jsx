import { NavLink } from "react-router-dom";
import style from "./Landing.module.css"

const Landing = ()=> {
    return (
        <div className={style.landingContainer}>
            <button>
                <NavLink to="/home" >Comencemos</NavLink>
            </button>
        </div>
    )
}

export default Landing;