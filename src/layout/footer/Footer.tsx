import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import { S } from './Footer_Styles';

const SocialItemsData = [
    {
        iconId: "mail",
        width: "21px",
        height: "16px"
    },
    {
        iconId: "telegram",
        width: "16.8px",
        height: "14.09px"
    },
    {
        iconId: "github-sm",
        width: "21px",
        height: "21px"
    },
    {
        iconId: "discord",
        width: "21px",
        height: "17px"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Andrei</S.Name>
                <S.SocialList>

                    {SocialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon iconId={s.iconId}
                                          width={s.width}
                                          height={s.height}
                                          viewBox={"0 0 21px 21px"}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Andrei Huryn, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};