import React from "react";

import { Container, InitialDescribeMe, Section, ImageContent, ApresentationContainer } from "./style"

import photo from "../../assets/eu.jpg"

const AboutMe: React.FC = () => {
    return (
        <Container>
            <ApresentationContainer>
                <ImageContent>
                    <img src={photo} alt="Foto Tarcio Sousa" />
                </ImageContent>

                <div>
                    <InitialDescribeMe>
                        <p>Olá, sou </p>
                        <h1>Tarcio Sousa</h1>
                    </InitialDescribeMe>

                    <InitialDescribeMe>
                        Full Stack Developer | Node | React | Javascript | Typescript
                    </InitialDescribeMe>
                </div>
            </ApresentationContainer>

            <Section>
                <p className="title">Experiências profissionais:</p>

                <ul>
                    <li>
                        <p className="describe">
                            <a className="linkDetailment" href="https://arquitetool.com.br/">Arquitetool</a> - Desenvolvedor web fullSatck
                        </p>
                        <div>
                            Projeto voltado para a área de gerenciamento de obras de arquitetura.
                        </div>
                    </li>
                    <li>
                        <p className="describe">
                            DataIlha - Projeto frelancer como Desenvolvedor web fullSatck
                        </p>
                        <div>
                            Sistema adminnistrativo para criação de formulários de pesquisas públicas e de mercado, com suporte para gerencimento de dados, relatórios integrados e gráficos analíticos.
                        </div>
                    </li>
                    <li>
                        <p className="describe">
                            Coração amigo - Projeto voluntário como Desenvolvedor web fullSatck
                        </p>
                        <div>
                            Projeto de gerencimento de atividades de uma instituição de atendimento voluntário de recursos e serviços à pessoas em situação de vulnerabilidade
                            social. Este projeto se tornou meu trabalho de conclusão de curso e um projeto de extensão universitária, apoiado
                            pela Universidade Federal do Sul e Sudeste do Pará.
                        </div>
                    </li>
                </ul>
            </Section>

            <Section>
                <p className="title">Projeto em destaque:</p>

                <ul>
                    <li>
                        <a target='blank' href="https://github.com/tarciosillva/Frontend_CoracaoAmigo.git">Projeto Coração amigo</a>
                    </li>
                </ul>
            </Section>


        </Container>
    )
}

export default AboutMe