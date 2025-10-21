import React from "react";
import styles from "./Hero.module.css";
import heroImagem from "../assets/imagemHero.jpg";

export default function Hero() {
  const heroStyle = {
    backgroundImage: `url(${heroImagem})`,
  };
  return (
    <section id="home" className={styles.heroSection} style={heroStyle}>
      <div className={styles.heroContent}>
        <h1>NÃO FIQUE DE FORA DESSA</h1>
        <button className={styles.ctaButton}>FAÇA PARTE DESSA FAMILIA</button>
      </div>
    </section>
  );
}
