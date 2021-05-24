import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameEntry from './GameEntry.jsx';

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 28px;
    border: transparent;
    margin: 7vw;
`;

const Icon = styled.img`
    margin: 10px;
    min-height: 28px;
    min-width: 28px;
`;

const Input = styled.input`
    width: 80vw;
    min-height: 28px;
    border: transparent;
    textTransform: uppercase;
`;

const None = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #e6e9eb;
`;

const Search = ({ list, addFavorite, deleteFavorite }) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value.toUpperCase());
        search(e.target.value.toUpperCase());
    }
    
    const [results, setResults] = useState([]);
    const search = (string) => {
        const updated = [];
        list.map(game => {
            if (game.name.toUpperCase().includes(string)) {
            // if (game.name.toUpperCase() === string) {
                updated.push(game)
            } 
        });
        setResults(updated);
    }

    return (
        <div>
            <h1>You entered: {text.toUpperCase()}</h1>
            <Bar>
                <Icon src="search.svg"/>
                <Input 
                    type="text"
                    value={text}
                    placeholder="SEARCH GAMES"
                    onChange={handleChange}
                    // change color of cursor to purple
                />
                <button 
                    onClick={() => showText('')}
                    style={{border: 'transparent', background: 'white'}}
                >
                    <img src="clear.svg" style={{background: 'white'}}/>
                </button>
            </Bar>
            {results 
                ? results.map(game => (
                    <GameEntry key={game.id} game={game} addFavorite={addFavorite} deleteFavorite={deleteFavorite}/>
                ))
                : <None><img src='noResults.svg'/><div>NO RESULTS FOUND</div></None>
            }
        </div>
    );
}

export default Search;
