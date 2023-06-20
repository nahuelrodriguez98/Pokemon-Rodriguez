import { useDispatch } from "react-redux";
import { CardsContainer} from "../../components/index.js";
import { useEffect } from "react";
import { getAllPokemons, getTypes } from "../../redux/actions/index.js";
import './home.style.css'


const Home=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllPokemons())
        dispatch(getTypes())
      },[dispatch])

    return(
        <div className='home'>
             <CardsContainer/>
        </div>

    )
}

export default Home ;