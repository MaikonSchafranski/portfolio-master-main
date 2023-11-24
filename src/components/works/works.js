import React from "react";
import "./works.css";
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Projetos</h2>

      <div className="worksBars">
        <a href="https://github.com/MaikonSchafranski/lista-de-computadores-Login-Regitro">
          <div className="worksBar">
            <div className="worksText">
              <h2>
                lista-de-computadores-Login-Regitro | <strong>Ionic</strong>
              </h2>
              <p>
                Elaboração de um aplicativo de registro de computadores com
                Ionic, integrado aos serviços do Firestore para armazenamento e
                autenticação, proporcionando eficácia no gerenciamento seguro de
                dados.
              </p>
            </div>
          </div>
        </a>

        <a href="https://github.com/MaikonSchafranski/pic-pay-simplificado-front-end">
          <div className="worksBar">
            <div className="worksText">
              <h2>
                Pic-Pay-simplificado | <strong>React</strong>
              </h2>
              <p>
                Implementação simplificada do front-end para o projeto PicPay,
                utilizando React com TypeScript e a biblioteca Axios para
                facilitar a comunicação com a API, proporcionando uma
                experiência robusta e eficiente aos usuários.
              </p>
            </div>
          </div>
        </a>

        <a href="https://github.com/MaikonSchafranski/pic-pay-simplificado-back-end">
          <div className="worksBar">
            <div className="worksText">
              <h2>
                pic-pay-simplificado-back-end | <strong>Java/Spring</strong>
              </h2>
              <p>
                Desenvolvimento simplificado do back-end para o projeto PicPay
                utilizando Spring, com a criação eficiente da lógica de
                negócios, e integração do banco de dados em memória H2 Database
              </p>
            </div>
          </div>
        </a>

        <a href="https://github.com/MaikonSchafranski/Reactive-forms">
          <div className="worksBar">
            <div className="worksText">
              <h2>
                Reactive-forms | <strong>Angular</strong>
              </h2>
              <p>
                Desenvolvimento de um aplicativo utilizando Reactive Forms no
                framework Angular, proporcionando uma abordagem reativa e eficaz
                para a captura e validação de dados em formulários.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Works;
