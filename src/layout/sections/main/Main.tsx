import React from 'react';
import photo from '../../../assets/images/my-photo (2).jpg'
import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <div>
                <span>Hi There</span>
                <h2>I am Andrei Huryn</h2>
                <h1>A Frontend Developer.</h1>
            </div>
            <Photo src={photo} alt=""/>
        </div>
    );
};

const Photo = styled.img`
    width: 367px;
    height: 367px;
    object-fit: cover;
    border-radius: 50%;
`