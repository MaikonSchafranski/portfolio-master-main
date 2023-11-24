import "./Intro.css";

import React from "react";

import bg from "../../assets/WhatsApp_Image_2023-11-24_at_12.56.05_PM-ai-brush-removebg-uxxyc29h.png";

import { PDFDocument } from "pdf-lib";
import curriculoPDF from "../../assets/curriculo.pdf";

const Intro = () => {
  const downloadPdf = async () => {
    const curriculoBytes = await fetch(curriculoPDF).then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.create();
    const curriculoDoc = await PDFDocument.load(curriculoBytes);

    const curriculoPages = await pdfDoc.copyPages(curriculoDoc, [0]);
    pdfDoc.addPage(curriculoPages[0]);

    const pdfBytes = await pdfDoc.save();
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "documento.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section>
        <div className="introContant">
          <span className="hello">Olá,</span>
          <span className="introText">
            sou <span className="introName"> Maikon Schafranski,</span>
            <br />
            Desenvolvedor full stack
          </span>
          <p className="introPera">
            apaixonado pelas tecnologias de desenvolvimento front-end e
            back-end. Atualmente, sou estudante de <br /> Análise e
            Desenvolvimento de Sistemas na Faculdade Uniguairaca. Embora ainda
            não tenha experiência <br /> profissional na área, possuo bom
            conhecimento em React, Angular, TypeScript e Java Spring.
          </p>

          <div>
            <button className="bnt" onClick={downloadPdf}>
              Currículo PDF
            </button>
          </div>
        </div>

        <img src={bg} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
