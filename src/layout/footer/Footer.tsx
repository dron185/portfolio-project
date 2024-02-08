import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <Name>Andrei</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"mail"} width={"21px"} height={"16px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"telegram"} width={"16.8px"} height={"14.09px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"github"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"discord"} width={"21px"} height={"17px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Andrei Huryn, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding: 40px 0;
`

const Name = styled.h3`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 35px;
    height: 35px;
    
    color: ${theme.colors.accent};
    
    &:hover {
        color: ${theme.colors.accent1};
        background-color: ${theme.colors.accent};
        transform: translateY(-4px);
    }
`

const Copyright = styled.small`
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    opacity: 0.5;
`