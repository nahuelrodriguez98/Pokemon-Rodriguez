import React from "react";
import style from './about.module.css';

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>¡Hola! Soy Nahuel Rodriguez</h2>
        <p className={style.description}>
          Un apasionado FullStack Developer de 24 años de edad, ubicado en la
          ciudad de Santa Fe, Argentina. Me dedico apasionadamente a crear
          soluciones tecnológicas y desarrollar aplicaciones innovadoras.
        </p>
        <p className={style.description}>
          Con una sólida formación académica y una pasión por la programación,
          he adquirido una amplia experiencia en el desarrollo web y en el
          manejo de diversas tecnologías. Mi conjunto de habilidades incluye
          JavaScript, React, Redux, Node.js, HTML5, CSS3, Git, SQL, Express,
          Sequelize, Typescript, Webpack, Python y AJAX. Constantemente me
          mantengo actualizado con las últimas tendencias y avances en el campo
          de la tecnología, lo que me permite ofrecer soluciones eficientes y
          de vanguardia.
        </p>
        <p className={style.description}>
          Mi enfoque principal es crear experiencias de usuario intuitivas y
          atractivas, centrándome en la usabilidad y el diseño limpio. Soy un
          aprendiz rápido, siempre abierto a nuevos desafíos y dispuesto a
          ampliar mis conocimientos en cualquier área que sea necesaria para
          lograr los objetivos del proyecto.
        </p>
      </div>
    </div>
  );
};

export default About;