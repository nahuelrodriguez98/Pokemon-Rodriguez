import {NavLink} from 'react-router-dom';
import {Searchbar} from '../index'
import style from "./navbar.module.css"

const NavBar = () => {
    return(
        <div className={style.Navegation}>
        <a target="_blank" rel="noopener noreferrer" href='https://www.soyhenry.com/'>
          <img alt="img" src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://github.com/nahuelrodriguez98'>
          <img alt="img"  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        </a>

        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/nahuel-federico-rodriguez-76a0891b4/'>
          <img alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
        </a>

        
        <NavLink to='/home' className={style.HomeButton}>Home</NavLink>
      
        <NavLink to='/form' className={style.CreateButton}>Create Pokemon</NavLink>

        <NavLink to='/about' className={style.AboutButton}>About</NavLink>
             
        <div className={style.SearchButton}>
          <Searchbar />
        </div>
        
        </div>
    )
}

export default NavBar;