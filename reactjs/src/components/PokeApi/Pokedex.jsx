import React from 'react';
import "../PokeApi/pokedex.css";
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons}=props;
     
  return (
    <div>
        <div className='header'>
            <h3>Pokedex</h3>
           <div>Pagination</div>
        </div>
        <div className='pokedex-grid'>
{pokemons.map((pokemon,id)=>{
    return(
        <Pokemon pokemon={pokemon} key={pokemon.name}/>
    )
})

}        </div>
    </div>
  )
}

export default Pokedex