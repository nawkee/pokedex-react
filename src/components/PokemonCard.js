import React from 'react';

const PokemonCard = ({ id, img, name, types, showInfo }) => {
    const capitalize = (word) => word.charAt(0).toUpperCase()+word.slice(1);

    const showPokemonInfo = () => {
        showInfo(id);
    };

    return (
        <div className="PokemonCard" onClick={showPokemonInfo}>
            <div className="img-box">
                <img src={img} alt={name}/>
            </div>
            <p>{capitalize(name)}</p>
            <div className="types">{types.map((type) => (
                <p key={type.type.name} className={`type ${type.type.name}`}>{capitalize(type.type.name)}</p>
            ))}</div>
        </div>
    );
};

export default PokemonCard;
