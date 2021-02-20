import React from 'react';

export const TextInput = ({value, changeInputValue}) => {
    return <input type='text' value={value} onChange={changeInputValue} />
};
