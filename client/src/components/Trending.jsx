import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'babel-polyfill';
import styled from 'styled-components';

import GameEntry from './GameEntry.jsx';

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Icon = styled.img`
    margin: 10px;
    min-height: 28px;
    min-width: 28px;
`;

const Trending = ({ list, addFavorite, deleteFavorite }) => {
    const [movie, setMovie] = useState(1);
    const [info, setInfo] = useState('');
    useEffect(() => {
        "use strict";
        async function getData() {
            const response = await axios.get(`https://swapi.dev/api/films/${movie}`);
            setInfo(response.data);
            console.log(response);
        }
        getData();
    }, [movie]);


    return (
        <div>
            <Title>
                <Icon src="trending.svg"/>
                <h1>TRENDING GAMES</h1>
            </Title>
            <div>
                {list.map(game => (
                    <GameEntry key={game.id} game={game} addFavorite={addFavorite} deleteFavorite={deleteFavorite}/>
                ))}
            </div>
        </div>
    );
};


export default Trending;
