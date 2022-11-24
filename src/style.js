import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to left, #ff170d, #ff5500, #ffa10d);
    background-attachment: local;
`;

export const Head = styled.div`
    display: flex;
    border-bottom: 2px groove red;
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
`;

export const HeadDiv = styled.div`
    padding-right: 5%;
    padding-bottom: 2%;
    padding-top: 2%;
`;

export const Index = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const About = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Projects = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Skills = styled.div`
    width: 100vw;
    height: 100vh;
`;
