import React from 'react';
import styled from 'styled-components';

import GameEntry from './GameEntry.jsx';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    max-height: 80vh;
    overflow-y: auto;
`;

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

const Trending = ({ list, toggleFavorite }) => {
    return (
        <Container>
            <Title>
                <Icon src="trending.svg"/>
                <h1 style={{whiteSpace: 'nowrap'}}>TRENDING GAMES</h1>
            </Title>
            <div>
                {list.map(game => (
                    <GameEntry key={game.id} game={game} toggleFavorite={toggleFavorite}/>
                ))}
            </div>
        </Container>
    );
};


export default Trending;
