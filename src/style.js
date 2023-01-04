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

    @media (max-width: 1024px) {
        width: 830px;
    }

    @media (max-width: 768px) {
        width: 430px;
    }

    @media (max-width: 425px) {
        width: 370px;
    }
`;

export const HeadLeft = styled.div`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
        width: 700px;
    }

    @media (max-width: 768px) {
        width: 400px;
    }

    @media (max-width: 425px) {
        width: 320px;
    }
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

    @media (max-width: 1024px) {
        a {
            font-size: 18px;
        }
        a:hover {
            font-size: 20px;
            transition: ease-in-out 0.3s;
        }
    }

    @media (max-width: 768px) {
        a {
            font-size: 12px;
        }
        a:hover {
            font-size: 14px;
            transition: ease-in-out 0.3s;
        }
    }

    @media (max-width: 425px) {
        a {
            font-size: 10px;
        }
        a:hover {
            font-size: 12px;
            transition: ease-in-out 0.3s;
        }
    }
`;

export const Index = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        width: 700px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 400px;
    }

    @media (max-width: 425px) {
        width: 320px;
    }
`;

export const Projects = styled.div`
    display: flex;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 700px;
        height: 900px;
    }

    @media (max-width: 768px) {
        width: 400px;
        height: 1650px;
    }

    @media (max-width: 425px) {
        width: 320px;
        height: 1750px;
    }
`;

export const Skills = styled.div`
    display: flex;
    height: 100vh;
    background-color: #ffffff;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 700px;
    }

    @media (max-width: 768px) {
        width: 400px;
    }

    @media (max-width: 425px) {
        width: 320px;
    }
`;

export const TitleProject = styled.h1`
    font-size: 55px;
    padding-bottom: 15px;
    padding-top: 65px;

    @media (max-width: 1024px) {
        font-size: 40px;
    }
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 1024px) {
        width: 700px;
    }

    @media (max-width: 768px) {
        width: 400px;
    }

    @media (max-width: 425px) {
        width: 320px;
    }
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

        @media (max-width: 768px) {
            margin-top: 15px;
        }

        @media (max-width: 425px) {
            margin-top: 15px;
        }
    }

    @media (max-width: 1024px) {
        width: 60%;
    }

    @media (max-width: 768px) {
        width: 60%;
    }

    @media (max-width: 425px) {
        width: 60%;
    }
`;

export const IndexRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 50vw;

    @media (max-width: 1024px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 40%;
    }

    @media (max-width: 425px) {
        width: 40%;
    }
`;

export const InfoTitle = styled.h1`
    @media (max-width: 1024px) {
        font-size: large;
    }

    @media (max-width: 768px) {
        font-size: larger;
        margin-top: 55px;
    }

    @media (max-width: 425px) {
        font-size: 22px;
        width: 320px;
        text-align: center;
        margin-top: 55px;
    }
`;

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

    @media (max-width: 1024px) {
        font-size: 12px;

        a {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        font-size: 13px;

        a {
            font-size: 13px;
        }
    }

    @media (max-width: 425px) {
        font-size: 12px;

        a {
            font-size: 10px;
        }
    }
`;

export const Description = styled.p`
    font-size: 21px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;

    @media (max-width: 1024px) {
        font-size: 17px;
    }

    @media (max-width: 768px) {
        font-size: 17px;
    }

    @media (max-width: 425px) {
        font-size: 15px;
    }
`;

export const Image = styled.img`
    border-radius: 250px;

    @media screen and (max-width: 980px) {
        max-width: 320px;
        max-height: 320px;
    }

    @media screen and (max-width: 1024px) {
        max-width: 250px;
        max-height: 250px;
    }

    @media screen and (max-width: 768px) {
        max-width: 180px;
        max-height: 180px;
    }

    @media screen and (max-width: 425px) {
        max-width: 170px;
        max-height: 170px;
    }
`;

export const TitleSkills = styled.h1`
    font-size: 55px;
    padding-bottom: 15px;
    padding-top: 65px;

    @media (max-width: 1024px) {
        font-size: 40px;
    }

    @media (max-width: 768px) {
        font-size: 30px;
    }

    @media (max-width: 425px) {
        font-size: 30px;
    }
`;
