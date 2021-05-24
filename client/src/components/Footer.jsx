import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #323a45;
`;

const Button = styled.button`
    border: transparent;
    background: #323a45;
`;

const Icon = styled.img`
    margin: 4vh 7vw 8vh 7vw;
    min-height: 28px;
    min-width: 28px;
`;

const Footer = ({ tab, setTab }) => (
    <Bar>
        <Button onClick={() => setTab('trending')}>
            <Icon src={tab === 'trending' ? 'trendingBarFill.svg' : 'trendingBar.svg'}/>
        </Button>
        <Button onClick={() => setTab('search')}>
            <Icon src={tab === 'search' ? 'searchBarFill.svg' : 'searchBar.svg'}/>
        </Button>
        <Button onClick={() => setTab('favorites')}>
            <Icon src={tab === 'favorites' ? 'favoritesBarFill.svg' : 'favoritesBar.svg'}/>
        </Button>
    </Bar>
);

export default Footer;
