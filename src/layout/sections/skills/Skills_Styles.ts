import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
    position: relative;
`

const IconWrapper = styled.div`
    
`

const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 52px 20px 45px;
    
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;
`

const SkillText = styled.p`
    text-align: center;
`

export const S = {
    Skills,
    IconWrapper,
    Skill,
    SkillTitle,
    SkillText
}