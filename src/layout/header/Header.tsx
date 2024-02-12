import React from 'react';
import { Logo } from '../../components/logo/Logo';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'

const items = ["Home", "Skills", "Works", "Contact"]

export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <MobileMenu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};