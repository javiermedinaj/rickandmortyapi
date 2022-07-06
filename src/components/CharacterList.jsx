import React from 'react'
import { useState, useEffect } from 'react'
import Character from './Character'


function NavPage({ page, setPage }) {
    return (
        <header className="py-2">
            {page - 41 ? (
                <li className="page-item">
                    <button className="btn btn-primary btn-sm" onClick={() => setPage(page + 1)}>
                        Siguiente {page + 1}
                    </button>
                </li>
            ) : null}
        </header>
    )
}



function BackPage({ page, setPage }) {
    return (
        <header className="py-5">
            {page - 1 ? (
                <li className="page-item">
                    <button className="btn btn-primary btn-sm" onClick={() => setPage(page - 1)}>
                        Volver {page - 1}
                    </button>
                </li>
            ) : null}
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
            <BackPage page={page} setPage={setPage} />
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
                    <NavPage page={page} setPage={setPage} />
                    <BackPage page={page} setPage={setPage} />
                </div>
            )}


        </div>
    );
}

export default CharacterList