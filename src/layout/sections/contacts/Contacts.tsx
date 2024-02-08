import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Subject"}/>
                    <Field placeholder={"Message"} as={"textarea"}/>
                    <Button type={"submit"}>Send message</Button>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    
    textarea {
        height: 155px;
        resize: none;
    }
`
const Field = styled.input`
    width: 100%;
    border-radius: 6px;
    padding: 7px 15px;
    border: 1px solid ${theme.colors.borderColor};
    
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.05em;
    color: ${theme.colors.font};
    background-color: ${theme.colors.primaryBg};

    &::placeholder {
        color: ${theme.colors.borderColor};
    }
    
    &:focus-visible {
        outline: 1px solid ${theme.colors.borderColor};
    }
`
