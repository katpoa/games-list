import React, { useState } from 'react';

const FormHooks = () => {
    const [text, showText] = useState('');
    const handleChange = (e) => {
        showText(e.target.value);
    }
    return (
        <div>
            <h1>You entered: {text}</h1>
            <input 
                type="text"
                value={text}
                onChange={handleChange}
            />
        </div>
    );
}

export default FormHooks;
