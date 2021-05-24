import React, { useState } from 'react';
import styled from 'styled-components';

const Artwork = styled.img`
    min-width: 45vw;
    min-height: 30vh;
`;

const Button = styled.button`
    border: transparent;
    background: transparent;
    min-height: 28px;
    min-width: 28px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
`;

const Icon = styled.img`
    background-color: #e6e9eb; // make star visible for now
    margin: 10px;
    min-height: 28px;
    min-width: 28px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
`;

const Genre = styled.div`
    color: #e6e9eb;
`;

const GameEntry = ({game, toggleFavorite}) => {
    // const [isFavorite, setFavorite] = useState(favorite);
    return (
        <div>
            <Artwork src={'https://' + game.cover}></Artwork>
            <Button onClick={() => toggleFavorite(game.id) }
            >
                <Icon src={game.favorite ? 'starFill.svg' : 'star.svg'}/>
            </Button>
            <Info>
                <Title>
                    <div>{game.name}</div>
                    {/* <Genre>{}</Genre> */}
                </Title>
                <div>Percent rating</div>
            </Info>
        </div>
    )
};

export default GameEntry;
