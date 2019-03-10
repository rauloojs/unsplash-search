import React from 'react';
import { FaFacebook, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer">
    <div>© 2019 Raúl Ojeda</div>
    <div>
      <FaFacebook className="social-icon"/>
      <FaLinkedinIn className="social-icon"/>
      <FaGithub className="social-icon"/>
    </div>
  </footer>
);

export default Footer;
