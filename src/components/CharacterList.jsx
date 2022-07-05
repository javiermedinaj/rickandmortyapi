import React from 'react'
import { useState, useEffect } from 'react'
import Character from './Character'


const CharacterList = () => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const data = await response.json();
            setCharacter(data.results)
        }
        fetchData()
    }, []);

    return (
        <div>
            {
                character.map((character) => (
                    <div className="col-md-4" key={character.id}>
                        <Character
                            key={character.id}
                            name={character.name}
                            origin={character.origin}
                            image={character.image}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default CharacterList