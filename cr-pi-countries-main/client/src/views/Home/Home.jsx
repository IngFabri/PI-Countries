import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filters from "../../components/filters/Filters";
import style from "./Home.module.css"

const Home = ()=>{

    return (
        <div className={style.home}>
          <div>
            <Filters/>
          </div>
          <div>
            <CardsContainer/>
          </div>
        </div>
      )
}

export default Home;