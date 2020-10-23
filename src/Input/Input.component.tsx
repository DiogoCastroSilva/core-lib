import React, { FC, InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { FormControl, FormControlFocus } from '../utils/styles/form';


export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    showFocus: boolean;
};

const InputContainer = styled.input<IInput>`
    ${FormControl};
    ${ ({ showFocus }) => showFocus ? FormControlFocus : null }
`;

const Input: FC<IInput> = ({ showFocus = true, ...rest}) => (
    <InputContainer
        {...rest}
        showFocus={showFocus}
    />
);

export default Input;