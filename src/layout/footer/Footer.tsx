import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

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
                            <Icon iconId={"telegram"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"github"} width={"21px"} height={"21px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={"discord"} width={"21px"} height={"15px"} viewBox={"0 0 21px 21px"}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copyright>© 2024 Andrei Huryn, All Rights Reserved.</Copyright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #efaf92;
    min-height: 20vh;
`

const Name = styled.h3`

`

const SocialList = styled.ul`
    display: flex;
    gap: 30px;
    list-style: none;
`

const SocialItem = styled.li`
    
`

const SocialLink = styled.a`
   display: inline-block;
`

const Copyright = styled.small`

`