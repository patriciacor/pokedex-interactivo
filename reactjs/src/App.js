import { Fragment, useState,useEffect } from 'react';
import Nabvar from './components/Nabvar/Nabvar';
import './App.css';
import Searchbar from './components/Searchbar/Searchbar';
import Pokedex from './components/PokeApi/Pokedex';
import {getPokemons, getPokemonsData} from "./components/PokeApi/PokeApi"

function App() {
const [pokemons,setPokemons]=useState([]);
const fetchPokemons = async()=>{
  try {
    const data= await getPokemons();
    const promises = data.results.map(async(pokemon)=>{
      return await getPokemonsData(pokemon.url)
    })
 const results = await Promise.all(promises)
 setPokemons(results)
  } catch (error) {
    
  }
}
useEffect(() => {
 fetchPokemons();

}, [])



  return (   

<Fragment>   
  <Nabvar/>
  <Searchbar/>
  <Pokedex pokemons={pokemons}/>
 
</Fragment> );
}

export default App;
