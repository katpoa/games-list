import React, { useState } from 'react';
import styled from 'styled-components';
import GameEntry from './GameEntry.jsx';
import axios from 'axios';


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
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
        setText(e.target.value);
        search(e.target.value);
    }
    
    const [results, setResults] = useState([]);
    const search = (string) => {
        axios(`/api/search?input=${string}`)
            .then(res => setResults(res.data))
            .catch(err => console.log(err));
    };
    const showResults = results.length
        ? results.map(game => (
            <GameEntry key={game.id} game={game} toggleFavorite={toggleFavorite}/>
        ))
        : <None><Image src='noResults.svg'/><Text>NO RESULTS FOUND<span></span></Text></None>;
    return (
        <Container>
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
                    onClick={() => { setText(''); search('') }}
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
