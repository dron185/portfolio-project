import React from "react";
import styled from "styled-components";

export const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Works</a>
                </li>
                <li>
                    <a href="">Testimony</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`