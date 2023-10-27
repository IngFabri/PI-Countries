import { Routes,Route } from "react-router-dom";
import {Detail,Form,Home} from "./views/index.js";
import Landing from "./views/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCountries,getActivities } from "./redux/actions.js";

function App() {

    const location = useLocation()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getCountries())
        dispatch(getActivities())
    },[])

    return (
        <div>
            {location.pathname !== "/" && <NavBar/>}
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/detail/:id" element={<Detail/>}/>
            </Routes>
        </div>
    )
}

export default App
