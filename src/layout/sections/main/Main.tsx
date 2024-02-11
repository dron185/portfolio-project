import React from 'react';
import photo from '../../../assets/images/photo-1.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <TextWrapper>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Andrei Huryn</span></Name>
                        <MainTitle>A Frontend Developer.</MainTitle>
                    </TextWrapper>

                    <PhotoWrapper>
                        <Photo src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

    ${FlexWrapper} {
        column-gap: 25px;
    }
    
    @media screen and (max-width: 830px) {
        ${FlexWrapper} {
            justify-content: space-around;
        }
    }
`

const TextWrapper = styled.div`
    
`

const PhotoWrapper = styled.div`
    max-height: 367px;
    max-width: 367px;
    border-radius: 50%;
    border: 10px solid transparent;
    background: linear-gradient(45deg,#01796F,#E3CB9D) border-box;
`

const Photo = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
`

const MainTitle = styled.h1`
    ${font({Fmax: 27, Fmin: 20, lineHeight: 1.5})}
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