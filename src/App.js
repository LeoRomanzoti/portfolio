import React, { useState, useEffect } from "react";
import {
    CardProject,
    CardSkills,
    Container,
    DoubleTextSkills,
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
    LinkProjects,
    Projects,
    Skills,
    SkillsImage,
    SubTitleCard,
    TextSkills,
    TitleCard,
    TitleProject,
    TitleSkills,
    Wrap,
} from "./style";
import GlobalStyle from "./styles/global";
import axios from "axios";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import {
    SiCss3,
    SiGit,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMysql,
    SiReact,
} from "react-icons/si";

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

    const idUrl = {
        543337493: "http://superclassicos.pedroimpulcetto.com.br/home.html",
        486785375: "https://github.com/LeoRomanzoti/aircnc",
        566996073: "https://controle-financeiro-leoromanzoti.vercel.app",
        535860515: "https://github.com/LeoRomanzoti/dev-radar",
        566053777: "https://github.com/LeoRomanzoti/leo-commerce",
        569933323: "https://github.com/LeoRomanzoti/portfolio",
    };

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
                                const url = idUrl[repo.id];
                                return (
                                    <CardProject>
                                        <TitleCard>{repo.name}</TitleCard>
                                        <SubTitleCard>
                                            {repo.description}
                                        </SubTitleCard>
                                        <LinkProjects
                                            href={url}
                                            target="_blank"
                                        >
                                            Acessar Projeto
                                        </LinkProjects>
                                    </CardProject>
                                );
                            })}
                    </Wrap>
                </Projects>
                <Skills id="skills">
                    <TitleSkills>Habilidades</TitleSkills>
                    <Wrap>
                        <CardSkills>
                            <SkillsImage src="https://cdn-icons-png.flaticon.com/512/644/644628.png" />
                            <DoubleTextSkills>Algoritmo/</DoubleTextSkills>
                            <DoubleTextSkills>
                                Lógica de Programação
                            </DoubleTextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiHtml5 color="orangered" size={100} />
                            <TextSkills>Html 5</TextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiCss3 color="mediumblue" size={100} />
                            <TextSkills>Css 3</TextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiJavascript color="gold" size={100} />
                            <TextSkills>JavaScript</TextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiReact color="turquoise" size={100} />
                            <DoubleTextSkills>React</DoubleTextSkills>
                            <DoubleTextSkills>React Native</DoubleTextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiGit color="tomato" size={100} />
                            <TextSkills>Git</TextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiGithub color="black" size={100} />
                            <TextSkills>GitHub</TextSkills>
                        </CardSkills>
                        <CardSkills>
                            <SiMysql color="midnightblue" size={100} />
                            <DoubleTextSkills>MySQL</DoubleTextSkills>
                            <DoubleTextSkills>Banco de Dados</DoubleTextSkills>
                        </CardSkills>
                    </Wrap>
                </Skills>
            </Container>
            <GlobalStyle />
        </>
    );
};

export default App;
