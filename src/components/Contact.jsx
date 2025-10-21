import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [nome, SetNome] = useState("");
  const [email, SetEmail] = useState("");
  const [telefoone, setTelefone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { nome, email, telefoone };
    console.log("Dados do formulario:", formData);
    alert("Obrigado pelo contato!! (olhar o console) ");
  };

  return (
    <section id="contato" className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            <span>NOSSO</span> CONTATO
          </h2>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            className={styles.input}
            value={nome}
            onChange={(e) => SetNome(e.target.value)}
          />

          <input
            type="email"
            placeholder="Digite seu email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="tel"
            placeholder="Digite seu telefone"
            className={styles.input}
            value={telefoone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
}
