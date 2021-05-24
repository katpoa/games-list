import React, { useState } from 'react';
import styled from 'styled-components';

const Frame = styled.div`
    display: block;
    max-width: 45vw;
    max-height: 30vh;
    object-fit: fill;
`;

const Artwork = styled.img`
    zIndex: 1;
`;

const Button = styled.button`
    zIndex: 100;
    margin-bottom: 5px;
    margin-right: 5px;
    border: transparent;
    background: transparent;
    min-height: 28px;
    min-width: 28px;
`;

const Info = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 45vw;
    justify-content: space-between;
    fontWeight: 300;
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
    margin-right: 5px;
`;

const Genre = styled.div`
    color: #e6e9eb;
`;

const GameEntry = ({game, toggleFavorite}) => {
    // const [isFavorite, setFavorite] = useState(favorite);
    return (
        <div>
            <Frame>
                <Artwork src={game.cover}/>
                <Button onClick={() => toggleFavorite(game.id) }
                >
                    <Icon src={game.favorite ? 'starFill.svg' : 'star.svg'}/>
                </Button>
            </Frame>
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
