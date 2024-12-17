import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";
import {S} from '../Works_Styles';

type WorkPropsType = {
    title: string
    text: string
    src: string
    demoLink: string
    codeLink: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>
                    <S.ButtonLink href={props.demoLink} target="_blank" rel="noopener noreferrer">
                        view project
                    </S.ButtonLink>
                </Button>
            </S.ImageWrapper>

            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.Links>
                    <Link active href={props.demoLink} target="_blank">demo</Link>
                    <Link href={props.codeLink} target="_blank">Code</Link>
                </S.Links>
            </S.Description>
        </S.Work>
    );
};