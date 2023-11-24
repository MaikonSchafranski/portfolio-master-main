import "./Skills.css";

import React from "react";

import angular from "../../assets/angular.png";
import rec from "../../assets/React.png";
import spring from "../../assets/spring.png";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="skillsTitle">Minha experiência</h2>
      <span className="skillsDesc">
        Possuo habilidades notáveis em React, Angular, TypeScript e Java Spring,
        essenciais para o desenvolvimento integrado front-end e back-end. Essa
        proficiência não apenas ampliou meu conhecimento técnico, mas também
        aprimorou minha capacidade de criar soluções eficientes e inovadoras em
        projetos. Estou entusiasmado em aplicar essas habilidades e contribuir
        de forma significativa em um ambiente profissional.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={rec} alt="rec" className="skillBarImg" />
          <div className="skillText">
            <h2>React</h2>
            <p>
              biblioteca front-end JavaScript de código aberto com foco em criar
              interfaces de usuário em páginas web
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={angular} alt="rec" className="skillBarImg" />
          <div className="skillText">
            <h2>Angular</h2>
            <p>
              Angular é uma plataforma de código aberto liderada pelo Google
              para desenvolvimento web, enquanto React é uma biblioteca de
              código aberto focada na criação de interfaces de usuário em
              páginas web.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={spring} alt="rec" className="skillBarImg" />
          <div className="skillText">
            <h2>Spring</h2>
            <p>
              O Spring é um framework open source para Java, desenvolvido por
              Rod Johnson, que segue os padrões de projeto de inversão de
              controle e injeção de dependência, proporcionando uma abordagem
              não intrusiva.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
