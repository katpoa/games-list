import React, { useState, useEffect } from 'react';
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

const Favorites = () => {
    
    return (
        <div>
            <Title>
                <Icon src={'favorites.svg'}/>
                <h1>FAVORITE GAMES</h1>
            </Title>
        </div>
    );
};


export default Favorites;
