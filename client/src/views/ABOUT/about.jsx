import React from "react";
import style from './about.module.css';

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <h2 className={style.title}>Hola! Soy Nahuel Rodriguez</h2>
        <p className={style.description}>
          Un apasionado FullStack Developer de 24 años de edad, ubicado en la
          ciudad de Santa Fe, Argentina. Me dedicon a crear
          soluciones tecnológicas y desarrollar aplicaciones innovadoras.
        </p>
        <p className={style.description}>
          Cuento con una sólida formación académica en el área de la programación.
          He adquirido una amplia experiencia en el desarrollo web y en el
          manejo de diversas tecnologías. En cuanto a mis habilidades puedo destacar
          JavaScript, React, Redux, Node.js, HTML5, CSS3, Git, SQL, Express,
          Sequelize, Typescript, Webpack, Python y AJAX. Constantemente me
          mantengo actualizado con las últimas tendencias y avances en el campo
          de la tecnología, lo que me permite ofrecer soluciones eficientes y
          de vanguardia.
        </p>
        <p className={style.description}>
          Mi enfoque es crear experiencias para el usuario que sean intuitivas y
          atractivas, centrándome en la usabilidad y el diseño. Soy un
          aprendiz rápido, dispuesto a nuevos desafios y
          ampliar mis conocimientos en cualquier área que sea necesaria para
          lograr los objetivos del proyecto.
        </p>
      </div>
    </div>
  );
};

export default About;