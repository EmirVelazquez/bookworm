import React from "react";
import Github from "./gitHub.png";
import LinkedIn from "./linkedIn.png";

const Footer = () => {
  return (
    <footer className="page-footer">
      <h5 className="header footerHeader">Bookworm</h5>
      <div className="row"></div>
      <div className="row">
        <div className="footer-copyright">
          <a
            className="grey-text text-lighten-4 right gitHub"
            src={Github}
            href="https://github.com/EmirVelazquez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="GitHub Logo" />
          </a>
          <a
            className="grey-text text-lighten-4 right linkedIn"
            src={Github}
            href="https://www.linkedin.com/in/emir-velazquez-35560b196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </a>
        </div>
        <div className="footer-copyright">© 2020 Emir Velazquez</div>
      </div>
    </footer>
  );
};

export default Footer;
