import React, { useState, useEffect } from 'react';
import './App.css';
import { getPokemon, getAllPokemon } from "./services/pokemon";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";

function App() {
    const [visiblePokemon, setVisiblePokemon] = useState(12);
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showInfo, setShowInfo] = useState(-1);

    useEffect(() => {
        async function fetchPokemons() {
            const response = await getAllPokemon(`https://pokeapi.co/api/v2/pokemon/?limit=${visiblePokemon}`);
            await loadPokemon(response.results);
            setIsLoading(false);
        }

        fetchPokemons();
    }, [visiblePokemon]);

    const loadPokemon = async (pokemons) => {
        const pokemonData = await Promise.all(pokemons.map(async (pokemon) => {
            const pokemonRecord = await getPokemon(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
            return pokemonRecord;
        }));
        setPokemonData(pokemonData);
    };

    const loadMore = () => {
        setIsLoading(true);
        setVisiblePokemon(visiblePokemon+12);
    };

    const showDetailedInfo = (id) => {
        setShowInfo(id-1);
    };

    return (
        <div className="App">
            <h1 className='header'>Pokedex</h1>
            <div className="content">
                <div className="left">
                    <Pokemon
                        pokemon={pokemonData}
                        showInfo={showDetailedInfo}
                    />
                    {isLoading ?
                        <button className="load-more" disabled={true}>Loading...</button>
                        :
                        <button className="load-more" onClick={loadMore}>Load More</button>
                    }
                </div>
                <div className="right">
                    {showInfo !== -1 && <PokemonInfo poke={pokemonData[showInfo]} />}
                </div>
            </div>
        </div>
    );
}

export default App;
