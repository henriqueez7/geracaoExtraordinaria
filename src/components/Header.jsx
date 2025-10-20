import logoImg from '../assets/logo.svg';
import React from 'react';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <img src={logoImg} alt="Logo Geração Extraordinária" />
        </div>
        <nav className={styles.navigation}>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#sobre">SOBRE</a></li>
                <li><a href="#localizacao">LOCALIZAÇÃO</a></li>
                <li><a href="#contato">CONTATO</a></li>
            </ul>
        </nav>
    </header>

        );
    }