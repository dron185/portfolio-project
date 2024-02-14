import React from 'react';
import photo from '../../../assets/images/photo-1.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"} wrap={"wrap"}>
                    <S.TextWrapper>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Andrei Huryn</span></S.Name>
                        <S.MainTitle>
                            <p>A Frontend Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Frontend Developer.'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </S.MainTitle>
                    </S.TextWrapper>

                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt=""/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};