import CardsContainer from "../../components/CardsContainer/CardsContainer"
import Filters from "../../components/filters/Filters"
import {useSelector} from "react-redux";

const Home = ()=>{

    const PARA_TENER_EN_CUENTA = "Africa, Europe, Oceania, Asia, South America, North America, Antarctica"

    return (
        <div>
            <Filters/>
            <CardsContainer/>
            {filteredContinents.map(continent => <h3>{continent}</h3>)}
        </div>
    )
}

export default Home;