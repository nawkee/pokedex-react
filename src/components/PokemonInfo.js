import React from 'react';

const PokemonInfo = ({ poke }) => {
    return (
        <div className='PokemonInfo'>
            <div className="img-info">
                <img src={poke.sprites.front_default} alt={poke.name}/>
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Type</td>
                        <td>{poke.types[0].type.name}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td>{poke.stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td>{poke.stats[2].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Hp</td>
                        <td>{poke.stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <td>SP Attack</td>
                        <td>{poke.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <td>SP Defense</td>
                        <td>{poke.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Speed</td>
                        <td>{poke.stats[5].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>{poke.weight}</td>
                    </tr>
                    <tr>
                        <td>Total moves</td>
                        <td>{poke.moves.length}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default PokemonInfo;
