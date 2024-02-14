import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import imgAbstraction from "../../../assets/images/abstract.svg"

const Main = styled.section`
    min-height: 100vh;
    display: flex;
`

const TextWrapper = styled.div`
    padding: 10px 0;
`

const PhotoBgContainer = styled.div`
    height: 570px;
    max-width: 570px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${imgAbstraction}) no-repeat center/cover;
`

const PhotoWrapper = styled.div`
    max-height: 367px;
    max-width: 367px;
    border-radius: 50%;
    border: 10px solid transparent;
    background: linear-gradient(45deg,#01796F,#E3CB9D) border-box;
    
    margin: 10px;
`

const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const MainTitle = styled.h1`
    ${font({Fmax: 27, Fmin: 20, lineHeight: 1.5})};
    
    p {
        display: none;
    }
`

const SmallText = styled.span`
    ${font({lineHeight: 1.5, Fmax: 14, Fmin: 14})}
`

const Name = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmax: 50, Fmin: 36})}
    margin: 10px 0;
    letter-spacing: 0.05em;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        
        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent1};
            
            position: absolute;
            bottom: 0;
            z-index: -1;
        }
    }
    
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
    }
`

export const S = {
    Main,
    TextWrapper,
    PhotoBgContainer,
    PhotoWrapper,
    Photo,
    MainTitle,
    SmallText,
    Name
}