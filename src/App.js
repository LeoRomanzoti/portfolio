import React from "react";
import {
    About,
    CardProject,
    Center,
    Container,
    Head,
    HeadDiv,
    HeadLeft,
    HeadRight,
    Index,
    Projects,
    Skills,
    TitleProject,
} from "./style";
import GlobalStyle from "./styles/global";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const App = () => {
    return (
        <>
            <Container>
                <Head>
                    <HeadLeft>
                        <HeadDiv>
                            <a
                                href="https://github.com/LeoRomanzoti"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsGithub color="black" size={35} />
                            </a>
                        </HeadDiv>
                        <HeadDiv>
                            <a
                                href="https://www.linkedin.com/in/leonardo-romanzoti-dev/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <BsLinkedin
                                    color="blue"
                                    size={35}
                                    onMouseOver={{}}
                                />
                            </a>
                        </HeadDiv>
                    </HeadLeft>
                    <HeadRight>
                        <a href="http://">
                            <p>Início</p>
                        </a>
                        <a href="http://">
                            <p>Sobre</p>
                        </a>
                        <a href="http://">
                            <p>Projetos</p>
                        </a>
                        <a href="http://">
                            <p>Habilidades</p>
                        </a>
                    </HeadRight>
                </Head>
                <Index></Index>
                <About></About>
                <Projects>
                    <TitleProject>Meus Projetos</TitleProject>
                    <Center>
                        <CardProject>
                            <h1>Hello</h1>
                        </CardProject>
                        <CardProject>
                            <h1>Hello</h1>
                        </CardProject>
                        <CardProject>
                            <h1>Hello</h1>
                        </CardProject>
                        <CardProject>
                            <h1>Hello</h1>
                        </CardProject>
                        <CardProject>
                            <h1>Hello</h1>
                        </CardProject>
                        <CardProject>
                            <h1>Hello</h1>
                        </CardProject>
                    </Center>
                </Projects>
                <Skills></Skills>
            </Container>
            <GlobalStyle />
        </>
    );
};

export default App;
