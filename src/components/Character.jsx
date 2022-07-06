import React from 'react'

const Character = (character) => {
    return (
        <div className="text-center p-5">
            <h2>{character.name}</h2>
            <img className="img-fluid rounded-pill" src={character.image} ></img>
            <p>{character.origin && character.origin.name}</p>
        </div>
    )
}

export default Character;


