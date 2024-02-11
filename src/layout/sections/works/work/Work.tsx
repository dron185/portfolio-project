import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>

                <Links>
                    <Link href={"#"}>demo</Link>
                    <Link href={"#"}>Code</Link>
                </Links>

            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    width: 330px;
    flex-grow: 1;
    background-color: ${theme.colors.secondaryBg};
    
    display: flex;
    flex-direction: column;
    
    ${Link} {
        padding: 10px 0;
        
        & + ${Link} {
            margin-left: 20px;
        }
    }
    
    @media ${theme.media.desktop} {
        max-width: 540px;
    }
`

const ImageWrapper = styled.div`
    position: relative;
    
    ${Button} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        &::before {
            width: 100%;
            height: 100%;
            border-radius: 6px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
    }
    
    &:hover {
        &::before {
            opacity: 1;
        }
        
        ${Button} {
            opacity: 1;
        }
    }
    
    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${Button} {
            opacity: 1;
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Description = styled.div`
    padding: 25px 20px;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
`

const Title = styled.h3`
    margin-bottom: 14px;
`

const Text = styled.p`
    margin-bottom: 10px;
    flex: 1 1 auto;
`

const Links = styled.div`
    
`