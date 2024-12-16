import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
    position: relative;
`

const Form = styled.form`
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

export const S = {
    Contacts,
    Form,
    Field
}