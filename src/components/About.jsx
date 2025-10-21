import React from "react";
import styles from "./About.module.css";
import aboutImage from "../assets/aboutImg.jpeg";

export default function About() {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.imagemContainer}>
          <img src={aboutImage} alt="Membros da célula reunidos" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>O QUE VOCÊ ENCONTRA AQUI?</h2>
          <h3 className={styles.subtitle}>UMA FAMÍLIA QUE BUSCA A DEUS.</h3>
          <p className={styles.quote}>
            "Porque, onde se reunirem dois ou três em meu nome, ali estou no
            meio deles."
          </p>
          <p className={styles.reference}>Mateus 18:20</p>
        </div>
      </div>
    </section>
  );
}
