import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to bottom, #ffffff, #6284ff, #ff0000);
`;

export const Head = styled.div`
    display: flex;
    width: 100%;
    background: rgba(196, 196, 196, 0.11);
    backdrop-filter: blur(10px);
    position: fixed;
    top: 0;
    z-index: 1;
    border-bottom: 1.5px groove #ff0000;
`;

export const HeadLeft = styled.div`
    display: flex;
    width: 35%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const HeadRight = styled.div`
    display: flex;
    width: 65%;
    justify-content: space-evenly;
    align-items: center;

    a {
        font-size: 23px;
        color: black;
    }
    a:link {
        text-decoration: none;
    }
    a:hover {
        color: blue;
        font-size: 25px;
        transition: ease-in-out 0.3s;
    }
`;

export const HeadDiv = styled.div`
    padding-right: 5%;
    padding-bottom: 2%;
    padding-top: 2%;
`;

export const Index = styled.div`
    height: 100vh;
`;

export const About = styled.div`
    height: 100vh;
    background-color: #ff0000;
`;

export const Projects = styled.div`
    height: 100vh;
    background-color: #ff0000;
`;

export const Skills = styled.div`
    height: 100vh;
    background-color: yellow;
`;

export const TitleProject = styled.h1`
    display: flex;
    font-size: 55px;
    justify-content: center;
    align-items: center;
`;

export const CardProject = styled.div`
    background-color: white;
    width: 240px;
    height: 240px;
    border-radius: 15px;
    margin: 20px;
`;

export const Center = styled.div`
    display: flex;
    width: 100vw;
    height: 40vh;
    justify-content: center;
    align-items: center;
`;

export const TitleCard = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubTitleCard = styled.h5`
    display: flex;
    justify-content: center;
    align-items: center;
`;
