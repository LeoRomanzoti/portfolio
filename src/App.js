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
    SkillsImage,
    SubTitleCard,
    TitleCard,
    TitleProject,
    TitleSkills,
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
                <Skills id="skills">
                    <TitleSkills>Habilidades</TitleSkills>
                    <Wrap>
                        <SkillsImage
                            src="https://cdn-icons-png.flaticon.com/512/490/490273.png"
                            alt="Algoritmo"
                            width="280px"
                            height="240px"
                        />
                        <SkillsImage
                            src="https://www.verticalslearning.com/wp-content/uploads/2018/11/curso-de-html5-css3-y-javascript.jpg"
                            alt="Html-Css-Js"
                            width="280px"
                            height="240px"
                        />
                        <SkillsImage
                            src="https://kodytechnolab.com/img/blog/big/reactjs-vs-react-native.jpg"
                            alt="React-ReactNative"
                            width="280px"
                            height="240px"
                        />
                        <SkillsImage
                            src="https://www.nicepng.com/png/detail/93-932207_js-on-light-background-node-js-logo-png.png"
                            alt="Node"
                            width="280px"
                            height="240px"
                        />
                        <SkillsImage
                            src="https://cdn-icons-png.flaticon.com/512/29/29165.png"
                            alt="SqL"
                            width="280px"
                            height="240px"
                        />
                        <SkillsImage
                            src="https://res.cloudinary.com/practicaldev/image/fetch/s--08RY4_Yg--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/1o8inq8110mxvqyls276.png"
                            alt="Git-Github"
                            width="280px"
                            height="240px"
                        />
                    </Wrap>
                </Skills>
            </Container>
            <GlobalStyle />
        </>
    );
};

export default App;
