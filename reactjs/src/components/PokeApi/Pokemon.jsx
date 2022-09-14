import React from 'react';
import heart from "../../assets/Vector.png";
import "./pokedex.css";


const Pokemon = (props) => {
    const { pokemon } = props;
    return (
        <div className='pokemon-card'>
            <div className='pokemon-img-container'>
                <img className="pokemon-img" src={pokemon.sprites.front_default} alt="" />

            </div>
            <div className='card-body'>
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div>


                    <div>{pokemon.types.map((type, id) => {
                        return (
                            <div key={id}>{type.name}</div>
                        )
                    })}</div>
                    <div>❤️️</div>

                </div>

            </div>
        </div>

    )
}

export default Pokemon