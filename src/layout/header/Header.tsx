import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { HeaderMenu } from './headerMenu/HeaderMenu';

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <HeaderMenu/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: aliceblue;
    display: flex;
    justify-content: space-between;
`