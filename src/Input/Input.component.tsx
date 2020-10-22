import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';


export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
};

const InputContainer = styled.input`
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    margin: 0;
    font-family: inherit;
    overflow: visible;

    :focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`;

const Input: FC<IInput> = ({ ...rest}) => (
    <InputContainer {...rest} />
);

export default Input;