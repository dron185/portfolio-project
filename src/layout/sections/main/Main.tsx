import React from 'react';
import photo from '../../../assets/images/photo-1.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} align={"center"}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Andrei Huryn</Name>
                    <MainTitle>A Frontend Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #f6f3b6;
`

const Photo = styled.img`
    width: 367px;
    height: 367px;
    object-fit: cover;
    border-radius: 50%;
`

const MainTitle = styled.h1`
    
`

const Name = styled.h2`
    
`