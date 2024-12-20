import styled, {css} from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const Link = styled.a<{active?: boolean}>`
        ${font({weight: 600, Fmax: 17, Fmin: 17, lineHeight: 1.5})};
        color: ${theme.colors.font};
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 10px;

        position: relative;
        z-index: 0;

        &:hover {
                &::before {
                        height: 10px;
                }
        }

        &::before {
                content: '';
                display: inline-block;
                background-color: ${theme.colors.accent1};

                position: absolute;
                bottom: 5px;
                left: 0;
                right: 0;
                z-index: -1;
                height: 0;
                transition: ${theme.animations.transition};

                ${props => props.active === true && css<{ active?: boolean }>`
                        height: 10px;
                `}
        }
`