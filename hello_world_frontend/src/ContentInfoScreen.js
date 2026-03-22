import React from "react";
import styles from "./ContentInfoScreen.module.css";

import bg from "../../figma_assets/ott-app/content-info-bg.png";

// PUBLIC_INTERFACE
export default function ContentInfoScreen() {
  return (
    <section className={styles.screen} aria-label="Content information">
      <img className={styles.bg} src={bg} alt="" aria-hidden="true" />

      <div className={styles.scrim} aria-hidden="true" />

      <div className={styles.statusBar} aria-hidden="true">
        <div className={styles.statusLeft}>20:14</div>
        <div className={styles.statusRight}>
          <span>20:44</span>
          <span className={styles.dot}>•</span>
          <span>LTE</span>
          <span className={styles.dot}>•</span>
          <span>100%</span>
        </div>
      </div>

      <div className={styles.leftPanel}>
        <header className={styles.titleBlock}>
          <h1 className={styles.title}>Gladiator II</h1>
          <div className={styles.subline}>
            Gladiator II • 2024 • 2h 28m • Action, Adventure, Drama
          </div>
        </header>

        <div className={styles.metaRow}>
          <span>IMDb 7.2</span>
          <span className={styles.bullet}>•</span>
          <span>U/A 16+</span>
          <span className={styles.bullet}>•</span>
          <span>English</span>
          <span className={styles.bullet}>•</span>
          <span>HD</span>
        </div>

        <p className={styles.description}>
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>

        <div className={styles.actions} aria-label="Content actions">
          <IconButton label="Play" variant="primary">
            ▶
          </IconButton>
          <IconButton label="Add to watchlist">＋</IconButton>
          <IconButton label="Like">♡</IconButton>
          <IconButton label="Share">↗</IconButton>
          <IconButton label="More options">⋯</IconButton>
        </div>
      </div>
    </section>
  );
}

function IconButton({ label, children, variant = "secondary" }) {
  const className =
    variant === "primary"
      ? `${styles.iconBtn} ${styles.iconBtnPrimary}`
      : styles.iconBtn;

  return (
    <button type="button" className={className} aria-label={label}>
      <span className={styles.icon} aria-hidden="true">
        {children}
      </span>
    </button>
  );
}

