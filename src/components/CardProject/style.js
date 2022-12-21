import styled from "styled-components";

export const CardProjectStyled = styled.div`
    display: flex;
    background-color: #e8e8e8;
    width: 240px;
    height: 240px;
    border-radius: 15px;
    margin: 0 20px 20px 20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const TitleCard = styled.h2`
    color: #ff0000;
    font-size: 28px;
    text-decoration: underline;
    font-style: oblique;
    margin-top: 10px;
`;

export const SubTitleCard = styled.p`
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const LinkProjects = styled.a`
    color: black;
    margin-bottom: 10px;
    background-color: #a3a3a3;
    border-radius: 20px;
    padding: 7px 20px 7px 20px;
    font-weight: bold;

    :link {
        text-decoration: none;
    }
`;
