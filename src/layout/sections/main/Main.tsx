import React from 'react';
import photo from '../../../assets/images/photo-1.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Andrei Huryn</span></Name>
                        <MainTitle>A Frontend Developer.</MainTitle>
                    </div>

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
    background-color: #f6f3b6;
    display: flex;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    
    &::before {
        content: '';
        width: 387px;
        height: 387px;
        border-radius: 50%;
        border: 5px solid ${theme.colors.accent1};
        
        position: absolute;
        top: -10px;
        left: 10px;
        z-index: -1;
    }
`

const Photo = styled.img`
    width: 367px;
    height: 367px;
    object-fit: cover;
    border-radius: 50%;
`

const MainTitle = styled.h1`
    font-size: 27px;
    font-weight: 400;
    line-height: 1.5;
`

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
`

const Name = styled.h2`
    margin: 10px 0;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 0.05em;
    
    span {
        position: relative;
        z-index: 0;
        
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
`