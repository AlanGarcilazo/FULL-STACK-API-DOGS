import React from "react";
import styles from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.contentAll}>
      <div className={styles.contentBody}>
        <div className={styles.column1}>
          <h1 className={styles.h1}>Acerca de Mí</h1>
          <p className={styles.p1}>
            Hola! Me llamo Alan Garcilazo ; Cuento con certificaciones en una de
            las mejores universidades tecnológicas del pais, la UTN (
            Universidad Tecnológica Nacional ) :  
            <p className={styles.pD}>
              * Experto en Seguridad de la Información (187 horas) -
              Experto en Hacking Ético (180 horas) - Programador Web
              Inicial (90 horas) - Programador Web Avanzado (90 horas) -
               Programador Full Stack ( + 800 horas
              ) - Tecnicatura Superior en
              Programación - Inicio cursada Marzo 2022 - UTN.
            </p>
            Me encuentro desarrollando aplicaciones Web y Mobile con mi grupo de
            trabajo en las cursadas. Si usted esta buscando una persona para su
            empresa con amplias ganas de crecer, construir, y fomentar un grupo
            eficiente laboral, esta viendo el perfil correcto. Contácteme por privado y le comento mis conocimientos en una entrevista.
          </p>
          <p className={styles.p2}>
            {" "}
            &copy;{(new Date().getFullYear(), new Date().getMonth)} Alan
            Garcilazo, All Right Reserverd.
          </p>
        </div>

        <div className={styles.column2}>
          <h1 className={styles.h1R}>Redes Sociales</h1>
          <div className={styles.row1}>
            <FontAwesomeIcon className={styles.linke} icon={faLinkedin} />
            <a
              className={styles.a}
              href="https://www.linkedin.com/in/alangarcilazo/"
              target="n_blank"
            >
              {" "}
              Linkedin
            </a>
          </div>
          <div className={styles.row1}>
            <FontAwesomeIcon className={styles.github} icon={faGithub} />
            <a
              className={styles.a}
              href="https://github.com/AlanGarcilazo"
              target="n_blank"
            >
              Github
            </a>
          </div>
          <div className={styles.row1}>
            <FontAwesomeIcon
              className={styles.email}
              icon={faEnvelopeOpenText}
            />
            <a
              className={styles.a}
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpRbMSvkgxmldkwShtKRTNkxKggCWkbPSmQfjmLvjXdHVLZLkJpQbxQmvDMSGDFbrbLjfj"
              target="n_blank"
            >
              Gmail
            </a>
          </div>
          <div className={styles.row1}>
            <FontAwesomeIcon className={styles.wsp} icon={faWhatsapp} />
            <a
              className={styles.a}
              href="https://api.whatsapp.com/send?phone=1150216805&text=Estimado:%20Me%20dirijo%20a%20usted%20para%20ofrecerle%20una%20propuesta%20laboral%20.%20Saludos%20cordiales."
              target="n_blank"
            >
              Whatsapp
            </a>
          </div>
          <div className={styles.row1}>
            <FontAwesomeIcon className={styles.cell} icon={faPhone} />
            <a className={styles.phone} href="tel:+1150216805">
              Telefono
            </a>
          </div>
        </div>

        <div className={styles.column3}>
          <h1 id="contactos"className={styles.h1}>Contactos</h1>
          <div className={styles.row2}>
            <p className={styles.p}>
              https://www.linkedin.com/in/alangarcilazo/
            </p>
          </div>
          <div className={styles.row2}>
            <p className={styles.p}>https://github.com/AlanGarcilazo</p>
          </div>
          <div className={styles.row2}>
            <p className={styles.p}>alangarcilazo.empleo@gmail.com</p>
          </div>
          <div className={styles.row2}>
            <p className={styles.p}>1150216805</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
