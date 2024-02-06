import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-align: center;
    margin-bottom: 90px;
    
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent1};
        
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%);
    }
`