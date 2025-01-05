import styles from './page.module.css';
import Common from './common';
import HexagonComponent from './HexagonComponent';
import DNGNProjectComponent from './DNGNProject';
import HexiiProjectComponent from './HexiiProject';
import BaaBProjectComponent from './BaaBProject';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.ribbonContent}>
          <span className={styles.leftText}>Sam</span>
          <img src="./顔.png" alt="Sam's face" className={styles.centerImage} />
          <span className={styles.rightText}>Shakeshaft</span>
        </div>
      </div>
      
      <div className={[styles.sticky, styles.top].join(" ")}>
        <div className={styles.nav}>
          <a href="#DNGN">DNGN</a>
          <a href="#Hexii">Hexii</a>
          <a href="#BaaB">Blind as a Bat</a>
        </div>
      </div>

      <div className={styles.description} id="projects">
        <h2># Projects</h2>

        <DNGNProjectComponent />
        <HexiiProjectComponent />
        <BaaBProjectComponent />
      </div>

      <div className={[styles.sticky, styles.bottom].join(" ")}>
        <div className={styles.nav}>
          <a href="https://ultimadei.itch.io">itch</a>
          <a href='https://github.com/UltimadeiGit'>Github</a>
        </div>
      </div>
      
    </main>
  );
}
