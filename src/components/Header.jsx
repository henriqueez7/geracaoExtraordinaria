// src/components/Header.jsx

import React, { useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../assets/logo.svg'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logoImg} alt="Logo Geração Extraordinária" />
      </div>

      {/* 👇 MUDANÇA: A NAVEGAÇÃO AGORA VEM PRIMEIRO NO CÓDIGO 👇 */}
      <nav className={`${styles.navigation} ${menuOpen ? styles.active : ''}`}>
        <ul>
          <li><a href="#home" onClick={handleLinkClick}>HOME</a></li>
          <li><a href="#sobre" onClick={handleLinkClick}>SOBRE</a></li>
          <li><a href="#localizacao" onClick={handleLinkClick}>LOCALIZAÇÃO</a></li>
          <li><a href="#contato" onClick={handleLinkClick}>CONTATO</a></li>
        </ul>
      </nav>

      {/* 👇 MUDANÇA: O HAMBÚRGUER AGORA VEM DEPOIS, COMO O CSS ESPERA 👇 */}
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </header>
  );
}