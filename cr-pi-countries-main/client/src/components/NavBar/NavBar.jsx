import { NavLink } from "react-router-dom";
import SearchBar from "../Searchbar/Searchbar";

const NavBar = ()=> {
    return (
        <div>
            <button><NavLink to="home"/>Home</button>
            <button><NavLink to="form"/>Form</button>
            <SearchBar/>
        </div>
    )
}

export default NavBar;