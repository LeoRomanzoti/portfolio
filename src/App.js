import React, { useState, useEffect } from "react";
import {
    Container,
    Description,
    Head,
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
    TitleProject,
    TitleSkills,
    Wrap,
} from "./style";
import GlobalStyle from "./styles/global";
import axios from "axios";

import { BsWhatsapp } from "react-icons/bs";

import CardProject from "./components/CardProject";
import CardSkills from "./components/CardSkills";
import { skillsList } from "./components/CardSkills/skills";
import { menus } from "./components/Menu/menu";
import avatar from "./assets/cartoon.jpg";
import Menu from "./components/Menu";
import { icons } from "./components/Icon/icon";
import Icon from "./components/Icon";

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
        587093217: "https://github.com/LeoRomanzoti/leo-commerce-front",
    };

    return (
        <>
            <Container>
                <Head>
                    <HeadLeft>
                        {icons.map((icon) => (
                            <Icon link={icon.link} icon={icon.icon} />
                        ))}
                    </HeadLeft>
                    <HeadRight>
                        {menus.map((menu) => (
                            <Menu link={menu.link} text={menu.text} />
                        ))}
                    </HeadRight>
                </Head>
                <Index id="index">
                    <IndexLeft>
                        <InfoTitle>Leonardo (Léo) Romanzoti</InfoTitle>
                        <Info>
                            Desenvolvedor Front-End | JavaScript | React | React
                            Native
                        </Info>
                        <br />
                        <br />
                        <Description>
                            Focado no front-end com JavaScript utilizando os
                            conceitos de componentização com React, sempre
                            buscando me comunicar e evoluir junto com meus
                            colegas de time.
                        </Description>
                        <div>
                            <Info>
                                <a
                                    href="https://wa.me/5519991345129"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Vamos trabalhar juntos? &nbsp;
                                    <BsWhatsapp color="green" size={30} />
                                </a>
                            </Info>
                        </div>
                    </IndexLeft>
                    <IndexRight>
                        <Image
                            src={avatar}
                            alt="Cartoon-Me"
                            width="380px"
                            height="380px"
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
                                    <CardProject
                                        name={repo.name}
                                        description={repo.description}
                                        url={url}
                                    />
                                );
                            })}
                    </Wrap>
                </Projects>
                <Skills id="skills">
                    <TitleSkills>Habilidades</TitleSkills>
                    <Wrap>
                        {skillsList.map((skill) => (
                            <CardSkills icon={skill.icon} title={skill.title} />
                        ))}
                    </Wrap>
                </Skills>
            </Container>
            <GlobalStyle />
        </>
    );
};

export default App;
