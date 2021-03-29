import React from 'react';
import useAdd from '../../../hookFunctions/useAdd';

const AddTurtles = () => {
    const [turtle, useAddTurtles] = useAdd(1);
    const makeTurtles = () => {
        let str = '';
        let repeat = turtle;
        while (repeat > 0) {
            str+='🐢'; 
            repeat --;
        }
        return str;
    };
    return (
        <div>
            <button onClick={useAddTurtles}>{makeTurtles()}</button>
        </div>
    );
};

export default AddTurtles;
