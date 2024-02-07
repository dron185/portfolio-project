import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"Subject"}/>
                <Field placeholder={"Message"} as={"textarea"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
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
    gap: 10px;
`
const Field = styled.input`
    
`
