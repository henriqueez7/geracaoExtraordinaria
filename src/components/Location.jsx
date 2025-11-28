import React from "react";
import styles from "./Location.module.css";

import locationImage from "../assets/location.jpg";

export default function Location() {
  const address = "RUA JABOTICABAL, QD 82 LT20, Luziânia - GO";

  const googleMapsUrl = `https://maps.app.goo.gl/UAemPdwa7x83QFXa6${encodeURIComponent(
    address
  )}`;

  return (
    <section id="localizacao" className={styles.locationSection}>
      <div className={styles.locationContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>ONDE FICAMOS?</h2>
          <p className={styles.address}>{address}</p>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            CLIQUE E VEJA A LOCALIZAÇÃO
          </a>
        </div>
        <div className={styles.imageContainer}>
          <img src={locationImage} alt="Local do encontro da célula" />
        </div>
      </div>
    </section>
  );
}
