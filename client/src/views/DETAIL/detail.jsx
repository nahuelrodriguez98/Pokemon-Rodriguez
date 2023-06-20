import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cleanDetailPokemon, getDetailPokemons } from "../../redux/actions";
import { useEffect } from "react";
import style from "./detail.module.css"

const Detail = () => {
  const { id } = useParams()
  const dispatch = useDispatch();
  const pokemon = useSelector(state => state.pokemonDetails)

  useEffect(() => {
    dispatch(cleanDetailPokemon())
    dispatch(getDetailPokemons(id))
  }, [dispatch, id])

  return (
    <div className={style.container}>
      {Array.isArray(pokemon) && pokemon.length > 0 ?
        <>
          <div className={style.Orderight}>
            <h2>Pokemon Information</h2>
            <h3>{pokemon[0].name.toUpperCase()}</h3>
            <img src={pokemon[0].image} alt="not found" />
          </div>
          <div className={style.info}>
            <form >
              <label>Hp: {pokemon[0].hp}</label>
              <br />
              <label>Attack: {pokemon[0].attack}</label>
              <br />
              <label>Defense: {pokemon[0].defense}</label>
              <br />
              <label>Speed: {pokemon[0].speed}</label>
              <br />
              <label>Height: {pokemon[0].height}</label>
              <br />
              <label>Weight: {pokemon[0].weight}</label>
              <br />
              <label>Types: {pokemon[0].types}</label>

            </form>
          </div>
        </>
        : (<div>
          <h2 className={style.loading}>Loading...</h2>
          <img className={style.imgChargeGame} src="https://giffiles.alphacoders.com/263/2637.gif" alt="gif" /> </div>)
      }
    </div>
  );
}

export default Detail;