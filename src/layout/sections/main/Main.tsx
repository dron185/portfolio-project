import React from 'react';
import photo from '../../../assets/images/photo-1.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={"home"}>
            <Container>
                <FlexWrapper justify={"space-around"} align={"center"} wrap={"wrap"}>
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

                    <S.PhotoBgContainer>
                        <Tilt className="parallax-effect-img"
                              tiltMaxAngleX={40}
                              tiltMaxAngleY={40}
                              perspective={800}
                              transitionSpeed={1500}
                              scale={1.1}
                              gyroscope={true}>
                            <S.PhotoWrapper>
                                <S.Photo src={photo} alt="my photo"/>
                            </S.PhotoWrapper>
                        </Tilt>
                    </S.PhotoBgContainer>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};