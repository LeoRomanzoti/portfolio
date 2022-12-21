import styled from "styled-components";

export const Container = styled.div`
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
        font-size: 25px;
        color: black;
    }
    a:link {
        text-decoration: none;
    }
    a:hover {
        color: blue;
        font-size: 27px;
        transition: ease-in-out 0.3s;
    }
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

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

export const IndexLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vw;

    div {
        margin-top: 100px;
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
    font-size: 23px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    a {
        color: black;
        padding: 14px;
        font-size: 32px;
        background-color: white;
        border-radius: 30px;
    }

    a:link {
        text-decoration: none;
    }
    a:hover {
        font-size: 35px;
        transition: ease-in-out 0.3s;
    }
`;

export const Description = styled.p`
    font-size: 21px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
`;

export const Image = styled.img`
    border-radius: 250px;
    @media screen and (max-width: 480px) {
        max-width: 170px;
        max-height: 170px;
    }
`;

export const TitleSkills = styled.h1`
    font-size: 55px;
    padding-bottom: 15px;
    padding-top: 65px;
`;
