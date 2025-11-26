import React, { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEnviando(true);

    const formData = { nome, email, telefone };

    try {
      const response = await fetch('http://localhost:8080/api/enviar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const numeroLider = '5561992137065'; 
        
        const mensagemZap = `Olá! Me chamo ${nome}. Enviei meus dados pelo site e quero participar da célula!`;
        const linkWhatsApp = `https://wa.me/${numeroLider}?text=${encodeURIComponent(mensagemZap)}`;

        window.open(linkWhatsApp, '_blank');

        setNome("");
        setEmail("");
        setTelefone("");
        
        alert("Sucesso! Verifique seu e-mail e fale conosco no WhatsApp.");
      } else {
        alert("Ops! Houve um erro ao enviar o e-mail. Tente novamente.");
      }

    } catch (erro) {
      console.error(erro);
      alert("Erro de conexão com o servidor.");
    } finally {
      setEnviando(false);
    }
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
            onChange={(e) => setNome(e.target.value)}
            required
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
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <button type="submit" className={styles.button} disabled={enviando}>
            {enviando ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
          </button>
        </form>
      </div>
    </section>
  );
}