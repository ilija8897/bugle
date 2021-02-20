import styled from 'styled-components';

export const Input = styled.input`
    display: block;
    margin-bottom: 16px;
    border: 1px solid #999;
    padding: 4px 12px;
    border-radius: 8px;
    box-shadow: none;
    line-height: 1.4;
    outline: none;
    transition: all .1s ease-in-out;
    
    &:focus {
        border: 1px solid #555;
    }
`;
