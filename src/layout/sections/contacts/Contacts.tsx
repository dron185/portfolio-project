import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import { S } from './Contacts_Styles';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_j2n80rh', 'template_jh6dufq', form.current, {
                publicKey: 'UIqYFWDuZhZFCE7ns',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"Name"} name={'user_name'}/>
                    <S.Field required placeholder={"email"} name={'email'}/>
                    <S.Field required placeholder={"Subject"} name={'subject'}/>
                    <S.Field required placeholder={"Message"} as={"textarea"} name={'message'}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contacts>
    );
};