import Button from "@material-ui/core/Button";
import mail from "../../assets/img/mail.png";
import heatset from "../../assets/img/heatset.png";
import sponsor1 from "../../assets/img/logo_alt.png";
import sponsor2 from "../../assets/img/vtex.png";

import React from "react";

const Footer = () => (
  <footer>
    <div className="footer-container">
      <div className="info-location">
        <strong>Localização</strong>
        <div className="underlined">
          <strong>______</strong>
        </div>
        <span>Avenida Andromeda 2000. Bloco 6 e 8</span>
        <span>Alphavile SP</span>
        <span>brasil@corebiz.ag</span>
        <span>+55 11 3090 1039</span>
      </div>
      <div className="button-container">
        <Button
          size="small"
          variant="contained"
          className="contact-button"
          startIcon={<img src={mail} alt="mail" />}
        >
          <p>ENTRE EM CONTATO</p>
        </Button>
        <Button
          size="small"
          variant="contained"
          className="talk-button"
          startIcon={<img src={heatset} alt="heatset" />}
        >
          <div className="button-talk">
            <p>FALE COM O NOSSO</p>
            <p>CONSULTOR ONLINE</p>
          </div>
        </Button>
      </div>
      <div className="sponsor-container">
        <div className="sponsor-1">
          <img src={sponsor1} alt="corebiz-logo" />
        </div>
        <div className="sponsor-2">
          <img src={sponsor2} alt="vtex-logo" />
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
