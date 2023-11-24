import "./footer.css";

import React from "react";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <div>
      <ScrollToTop className="scrollTop" smooth top="50" />

      <footer className="footer">
        Copyright © 2023 Maikon Schafranski. Todos os direitos reservados.
      </footer>
    </div>
  );
};
export default Footer;
