import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";

export const Link = styled.a<{active?: boolean}>`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 10px;
    
    position: relative;
    z-index: 0;
    
    &:hover {
        &::before {
            height: 10px;
        }
    }
    
    &::before {
        content: '';
        display: inline-block;
        background-color: ${theme.colors.accent1};
        
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
        z-index: -1;
        
        ${props => props.active === true && css<{active?: boolean}>`
            height: 10px;
        `}
    }
`