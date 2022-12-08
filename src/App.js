import React, { useState, useEffect } from "react";
import {
    CardProject,
    Container,
    Head,
    HeadDiv,
    HeadLeft,
    HeadRight,
    Image,
    Index,
    IndexLeft,
    IndexRight,
    Info,
    InfoTitle,
    Projects,
    Skills,
    SubTitleCard,
    TitleCard,
    TitleProject,
    Wrap,
} from "./style";
import GlobalStyle from "./styles/global";
import axios from "axios";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const App = () => {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        async function loadData() {
            const data = await axios.get(
                "https://api.github.com/users/LeoRomanzoti/repos"
            );
            setRepos(data.data);
        }
        loadData();
    }, []);

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
                                <BsLinkedin color="blue" size={35} />
                            </a>
                        </HeadDiv>
                    </HeadLeft>
                    <HeadRight>
                        <a href="#index">
                            <p>Início</p>
                        </a>
                        <a href="#projects">
                            <p>Projetos</p>
                        </a>
                        <a href="#skills">
                            <p>Habilidades</p>
                        </a>
                    </HeadRight>
                </Head>
                <Index id="index">
                    <IndexLeft>
                        <InfoTitle>Leonardo (Léo) Romanzoti</InfoTitle>
                        <Info>
                            Desenvolvedor Front-End | JavaScript | React | React
                            Native
                        </Info>
                        <div>
                            <Info>
                                <a
                                    href="https://wa.me/5519991345129"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Vamos trabalhar juntos? &nbsp;
                                    <BsWhatsapp color="green" size={35} />
                                </a>
                            </Info>
                        </div>
                    </IndexLeft>
                    <IndexRight>
                        <Image
                            src="cartoon.jpg"
                            alt="Cartoon-Me"
                            width="70%"
                            height="70%"
                        />
                    </IndexRight>
                </Index>
                <Projects id="projects">
                    <TitleProject>Meus Projetos</TitleProject>
                    <Wrap>
                        {repos
                            .filter((repo) => repo.id !== 543337936)
                            .map((repo) => {
                                return (
                                    <CardProject>
                                        <TitleCard>{repo.name}</TitleCard>
                                        <SubTitleCard>
                                            {repo.description}
                                        </SubTitleCard>
                                    </CardProject>
                                );
                            })}
                    </Wrap>
                </Projects>
                <Skills id="skills"></Skills>
            </Container>
            <GlobalStyle />
        </>
    );
};

export default App;
