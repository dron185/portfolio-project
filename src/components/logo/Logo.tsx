import React from "react";
import {animateScroll as scroll} from "react-scroll";
import {Icon} from "../icon/Icon";

export const Logo: React.FC = () => {
    return (
        <a onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={"code"} width={"80"}/>
        </a>
    );
};