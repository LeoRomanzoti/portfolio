import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(to top, #ffffff, #6284ff, #ff0000);
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
    width: 40%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;

export const HeadRight = styled.div`
    display: flex;
    width: 60%;
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
    padding-right: 7%;
    padding-bottom: 2%;
    padding-top: 2%;
`;

export const Index = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Projects = styled.div`
    display: flex;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;
`;

export const Skills = styled.div`
    display: flex;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;
`;

export const TitleProject = styled.h1`
    font-size: 55px;
    padding-bottom: 15px;
    padding-top: 65px;
`;

export const CardProject = styled.div`
    display: flex;
    background-color: #6284ff;
    width: 240px;
    height: 240px;
    border-radius: 15px;
    margin: 0 20px 20px 20px;
    flex-direction: column;
    align-items: center;
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const TitleCard = styled.h2``;

export const SubTitleCard = styled.h5``;

export const IndexLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vw;

    div {
        margin-top: 180px;
    }
`;

export const IndexRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vw;
`;

export const InfoTitle = styled.h1``;

export const Info = styled.p`
    font-size: 28px;

    a {
        color: black;
        padding: 10px;
        font-size: 38px;
        background-color: white;
        border-radius: 30px;
    }

    a:link {
        text-decoration: none;
    }
    a:hover {
        font-size: 44px;
        transition: ease-in-out 0.3s;
    }
`;

export const Image = styled.img`
    border-radius: 250px;
`;

export const SkillsImage = styled.img`
    margin: 0 40px 20px 40px;
    width: 280px;
    height: 250px;
`;

export const TitleSkills = styled.h1`
    font-size: 55px;
    padding-bottom: 15px;
    padding-top: 65px;
`;
