
export const searchPokemon = async (pokemon)=>{
        try {
            let URLApi = ` https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const response = await fetch(URLApi);
            const data = await response.json()
            return data;
        } catch (error) {
            
        }
    }
  export const getPokemons = async (limit =20,offset=0) =>{
    try {
        let URLApi = ` https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(URLApi);
        const data = await response.json()
        return data;
    } catch (error) {
        
    } 
}
export  const getPokemonsData = async(url)=>{
    try {
        
        const response = await fetch(url);
        const data = await response.json()
        return data;
    } catch (error) {
        
    }
}
  

