import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByNamePokemon } from "../../redux/actions";
import style from "./searchbar.module.css"

const Searchbar = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    
    const handleChange = (event) => {
        setName(event.target.value);//Cada vez que el usuario escribe, se actualiza el valor de name con el valor actual del campo.
    }

    const onSearch = (event) => {
        event.preventDefault()
        if(name.trim() !== ''){//Si el campo de búsqueda no está vacío
            dispatch(getByNamePokemon(name));
        }
    }

    return(
        <div className={style.searchbar}>
            <form onSubmit={onSearch}>
            <input type="search" onChange={handleChange} placeholder="name..."/>
            <button type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Searchbar;