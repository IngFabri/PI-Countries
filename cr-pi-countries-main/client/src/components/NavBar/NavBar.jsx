import { NavLink } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";
import style from "./NavBar.module.css"

const NavBar = ()=> {
    return (
        <div className={style.navBar}>
            <div>
                <NavLink to="/home">Home   </NavLink>
                <NavLink to="/form">Form</NavLink>
            </div>
            <div>
                <SearchBar/>
            </div>
        </div>
    )
}

export default NavBar;