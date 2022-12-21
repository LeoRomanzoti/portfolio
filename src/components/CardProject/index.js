import React from "react";
import {
    CardProjectStyled,
    LinkProjects,
    SubTitleCard,
    TitleCard,
} from "./style";

const CardProject = ({ name, description, url }) => {
    return (
        <CardProjectStyled>
            <TitleCard>{name}</TitleCard>
            <SubTitleCard>{description}</SubTitleCard>

            <LinkProjects href={url} target="_blank">
                Acessar Projeto
            </LinkProjects>
        </CardProjectStyled>
    );
};

export default CardProject;
