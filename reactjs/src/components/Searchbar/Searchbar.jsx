import React, { Fragment, useState } from 'react';
import "./Searchbar.css";
import { searchPokemon } from '../PokeApi/PokeApi';
const Searchbar = () => {
    const [searchbar,setSearchbar]= useState("");
    const [pokemon,setPokemon] =useState();
    const onChange = (e) => {
     setSearchbar(e.target.value);
    }
    const onClick = async (e) =>{      
      e.preventDefault();
      const data = await searchPokemon(searchbar);
      setPokemon(data)
        }
 
return (
<div className='container'>
<div> 
  <input onChange={onChange}  className="input" placeholder="Search Pokemon"/>

  <button onClick={onClick} className="btn"><i className="bi bi-search-heart-fill"></i></button>
</div>

 
</div>

   )
}

export default Searchbar