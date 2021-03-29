import { useState } from 'react';


const useAdd = (initial = 1) => {
    const [state, setState] = useState(initial);
    const add = () => {
        setState(state + 1);
    };
    return [state, add];
};

export default useAdd;
