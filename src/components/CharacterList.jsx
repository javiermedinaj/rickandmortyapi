import React from 'react'
import { useState, useEffect } from 'react'
import Character from './Character'

function NavPage({ page, setPage }) {
    return (
        <header>
            <p>Page: {page}</p>
            <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)}>
                Page {page + 1}
            </button>
        </header>
    )
}

function BackPage({ page, setPage }) {
    return (
        <header py-5>
            <p>Volver atras {page - 1}</p>
            <button className="btn btn-primary btn-sm" onClick={() => setPage(page - 1)}>
                Page {page - 1}
            </button>
        </header>
    )
}


const CharacterList = () => {
    const [character, setCharacter] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
            const data = await response.json();
            setCharacter(data.results)
        }
        fetchData()
    }, [page]);

    return (
        <div className="container">
            <NavPage page={page} setPage={setPage} />
            {(
                <div className="row">
                    {character.map((character) => (
                        <div className="col-md-4" key={character.id}>
                            <Character
                                key={character.id}
                                name={character.name}
                                origin={character.origin}
                                image={character.image}
                            />
                        </div>
                    ))}
                    <BackPage page={page} setPage={setPage} />
                </div>
            )}


        </div>
    );
}

export default CharacterList