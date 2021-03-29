import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'babel-polyfill';

const SWMovies = () => {
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
            <h1>Choose your Star Wars movie!</h1>
            <h1>{info.title}, {info.release_date}</h1>
            <p>{info.opening_crawl}</p>
            <select value={movie} onChange={e => setMovie(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                {/* <option value='3'>3</option> */}
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                {/* <option value='7'>7</option> */}
            </select>
        </div>
    );
};


export default SWMovies;
