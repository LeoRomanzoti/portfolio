import React from "react";
import { HeadDiv } from "./style";

const Icon = ({ link, icon }) => {
    return (
        <HeadDiv>
            <a href={link} target="_blank" rel="noreferrer">
                {icon}
            </a>
        </HeadDiv>
    );
};

export default Icon;
