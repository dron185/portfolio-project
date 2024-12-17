import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import { S } from './Footer_Styles';

const SocialItemsData = [
    {
        iconId: "mail",
        width: "21px",
        height: "16px",
        url: "mailto:gurin.nord@gmail.com"
    },
    {
        iconId: "telegram",
        width: "16.8px",
        height: "14.09px",
        url: "https://t.me/dron_by"
    },
    {
        iconId: "github-sm",
        width: "21px",
        height: "21px",
        url: "https://github.com/dron185"
    },
    {
        iconId: "discord",
        width: "21px",
        height: "17px",
        url: "https://discordapp.com/users/1004750057897197619/"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Andrew</S.Name>
                <S.SocialList>

                    {SocialItemsData.map((s, index) => {
                        return (
                            <S.SocialItem key={index}>
                                <S.SocialLink href={s.url} target="_blank">
                                    <Icon iconId={s.iconId}
                                          width={s.width}
                                          height={s.height}
                                          viewBox={"0 0 21px 21px"}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        )
                    })}

                </S.SocialList>
                <S.Copyright>© 2024 Andrew Huryn, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};