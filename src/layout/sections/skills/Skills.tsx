import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from './skill/Skill';
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "html",
        title: "html5",
    },
    {
        iconId: "css",
        title: "css3",
    },
    {
        iconId: "react",
        title: "React",
    },
    {
        iconId: "javaScript",
        title: "javascript",
    },
    {
        iconId: "typeScript",
        title: "typescript",
    },
    {
        iconId: "styledComponents",
        title: "styled components",
    },
    {
        iconId: "git",
        title: "git",
    },
    {
        iconId: "redux",
        title: "redux",
    },
    {
        iconId: "github",
        title: "github",
    },
    {
        iconId: "radix",
        title: "radix",
    },
{
        iconId: "mui",
        title: "mui",
    },
{
        iconId: "storybook",
        title: "storybook",
    },

]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.2}>
                        {skillData.map((s, index) => {
                            return <Skill key={index} iconId={s.iconId} title={s.title}/>
                        })}
                    </Fade>

                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};