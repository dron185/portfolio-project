import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    width: 170px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    z-index: 0;
    
    &:hover {
        &::before {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }
    
    &::before {
        content: '';
        display: inline-block;
        height: 10px;
        width: 50%;
        background-color: ${theme.colors.accent1};
        transition: ${theme.animations.transition};
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }
`