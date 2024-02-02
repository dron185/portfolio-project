import React from 'react';
import styled from "styled-components";
import { Menu } from '../../../components/meny/Menu';
import {SectionTitle} from "../../../components/SectionTitle";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>

            <Menu/>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: aquamarine;
`