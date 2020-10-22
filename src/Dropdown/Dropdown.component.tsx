import React, { FC, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button.component';

export interface IDropdown {};

const DropdownContainer = styled.div`
    position: relative;
    width: 222px;
    user-select: none;
`;

const ButtonContainer = styled(Button)`
    position: relative;
`;

const Dropdown: FC<IDropdown> = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        <DropdownContainer>
            <ButtonContainer onClick={handleClick}>Ola</ButtonContainer>
            {/* {isOpen
                ? <FontAwesomeIcon name="angle-up" size="2x" />
                : <FontAwesomeIcon name="angle-down" size="2x" />} */}
        </DropdownContainer>
    );
};


export default Dropdown;