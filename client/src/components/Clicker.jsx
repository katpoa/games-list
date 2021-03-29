import React, { useState, useEffect } from 'react';

const Clicker = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times!`;
        // alert('Changes were made!');
    });
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Clicked {count} times!</button>
        </div>
    );
};

export default Clicker;

