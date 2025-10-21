import React from "react";
import styles from "./Location.module.css";

import locationImage from "../assets/location.jpg";

export default function Location() {
  const address = "RUA JABOTICABAL, QD 82 LT20, Luziânia - GO";

  const googleMapsUrl = `https://www.google.com/maps/place/R.+Jaboticabal,+303-1+-+Jardim+do+Inga,+Luzi%C3%A2nia+-+GO,+72850-300/@-16.1507719,-47.9539207,17z/data=!3m1!4b1!4m9!1m2!2m1!1srua+jaboticabal+quadra+82+lote+20+72850300!3m5!1s0x93599adc59c5265d:0x6075dd31fbc41fb9!8m2!3d-16.1507719!4d-47.9539207!16s%2Fg%2F11g623j7_p?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D${encodeURIComponent(
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
