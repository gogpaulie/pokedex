import React from 'react'
import './style.css';
import pokemonTypes from '../../helpers/pokemonTypes';

export default function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="pokemon sprite"/>
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {pokemon.types.map(type => {
                    return (
                        <div className="Card__type" style={{ backgroundColor: pokemonTypes[type.type.name] }}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="Card__info">
                <div className="Card__data Card--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card--height">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>

        </div>
    )
}

