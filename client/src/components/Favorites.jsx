import React, { useState, useEffect } from 'react';
import GameEntry from './GameEntry.jsx';

import axios from 'axios';
import 'babel-polyfill';
import styled from 'styled-components';

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

const Favorites = ({ list, toggleFavorite }) => {
    
    return (
        <div>
            <Title>
                <Icon src={'favorites.svg'}/>
                <h1>FAVORITE GAMES</h1>
            </Title>
            <div>
                {list.map(game => {
                    if (game.favorite) {
                        return <GameEntry key={game.id} game={game} toggleFavorite={toggleFavorite}/>;
                    }
                })}
            </div>
        </div>
    );
};


export default Favorites;
