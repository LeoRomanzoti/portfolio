import React from "react";
import { CardSkillsStyled, TextSkills } from "./style";

const CardSkills = ({ icon, title }) => {
    return (
        <CardSkillsStyled>
            {icon}
            <TextSkills>{title}</TextSkills>
        </CardSkillsStyled>
    );
};

export default CardSkills;
