import React from 'react';
import PokemonCard from "./PokemonCard";

const Pokemon = ({ pokemon, showInfo }) => {
    return (
        <>

            <div className="Pokemon">
                {pokemon.map((poke) =>
                    <PokemonCard
                        key={poke.id}
                        id={poke.id}
                        img={poke.sprites.front_default}
                        name={poke.name}
                        types={poke.types}
                        showInfo={showInfo}
                    />
                )}
            </div>
        </>

    );
};

export default Pokemon;
