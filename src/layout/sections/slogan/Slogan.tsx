import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan: React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                    <SectionTitle style={{marginBottom: "0"}}>Let's create together!</SectionTitle>
                    {/*<Button>Hire me</Button>*/}
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
    min-height: 30vh;
    background-color: #f5dcbc;
`