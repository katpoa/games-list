import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameEntry from './GameEntry.jsx';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
`;

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
    color: #e6e9eb;
    margin: 120px;
`;

const Text = styled.div`
    display: flex;
    // justify-content: center;
    white-space: nowrap;
`;

const Image = styled.img`
    max-height: 133px;
    max-width: 133px;
`;

const Search = ({ list, toggleFavorite }) => {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value.toUpperCase());
        search(e.target.value.toUpperCase());
    }
    
    const [results, setResults] = useState([]);
    const search = (string) => {
        const updated = [];
        list.map(game => {
            // if (game.name.toUpperCase().includes(string)) {
            if (game.name.toUpperCase() === string) {
                updated.push(game);
                setResults(updated);
            } else {
                setResults([]);
            }
        });
    }
    const showResults = results.length
        ? results.map(game => (
            <GameEntry key={game.id} game={game} toggleFavorite={toggleFavorite}/>
        ))
        : <None><Image src='noResults.svg'/><Text>NO RESULTS FOUND<span></span></Text></None>;
    return (
        <Container>
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
            {showResults}
        </Container>
    );
}

export default Search;
