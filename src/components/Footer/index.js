import React from 'react';
import Logo from "../../assets/img/logo.png";
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="TechFlix logo" />
      </a>
      <p>
        <i>"The sky above the port was the color of television, tuned to a dead channel."</i>
      </p>
    </FooterBase>
  );
}

export default Footer;
