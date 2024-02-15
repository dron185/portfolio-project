import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 40px 0;
    position: relative;
`

const Name = styled.h3`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 22, Fmin: 16})};
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 35px;
    height: 35px;
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.accent1};
        background-color: ${theme.colors.accent};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    opacity: 0.5;
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}