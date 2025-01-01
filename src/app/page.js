import Image from 'next/image';
import styles from './page.module.css';
import HexagonComponent from './HexagonComponent';

function Highlight({ children }) {
  return <span className={styles.highlight}>{children}</span>;
}

function Icon({ src, alt }) {
  return <Image style={styles.icon} src={src} alt={alt} width={32} height={32} />;
}

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={[styles.center, styles.header].join(' ')}>
        <h1 className={styles.title}>
          Sam Shakeshaft
        </h1>
        <h2>
          <Highlight>Programmer</Highlight>
        </h2>
      </div>
      <div className={styles.nav}>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </div>

      <div className={styles.container}>
        <div className={styles.description}>
          <h2># About</h2>
          <p>
            I&apos;m Sam, a hard-working, conscientious individual with a deep passion for learning. I recently completed the following A-Levels at college:
          </p>
          <ul>
            <li>
              <Icon src="/icon_brain.png" alt="Icon" />
              Psychology [Grade Pending]: A* Predicted
            </li>
            <li>Computer Science [Grade Pending]: A* Predicted</li>
            <li>Mathematics [Grade Pending]: A* Predicted</li>
            <li>Further Mathematics [Grade Pending]: A* Predicted</li>
          </ul>
        </div>

        <div className={styles.card} id="about">
          <h4>Contact Info</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut cursus nibh. Sed in fermentum risus, eget sollicitudin odio. Donec metus neque, sagittis vitae mollis vitae, viverra et lectus. Donec metus tortor, cursus vitae nunc ac, rutrum accumsan ipsum. Aenean sed mauris turpis. Nullam nec dolor in nibh pulvinar posuere. Etiam ac porta nulla. Suspendisse non neque pretium, lobortis nisi quis, tempus sapien.
          </p>
        </div>
      </div>

      <div className={styles.description} id="skills">
        <h2># Skills</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut cursus nibh. Sed in fermentum risus, eget sollicitudin odio. Donec metus neque, sagittis vitae mollis vitae, viverra et lectus. Donec metus tortor, cursus vitae nunc ac, rutrum accumsan ipsum. Aenean sed mauris turpis. Nullam nec dolor in nibh pulvinar posuere. Etiam ac porta nulla. Suspendisse non neque pretium, lobortis nisi quis, tempus sapien.
        </p>
      </div>

      <div className={styles.description} id="projects">
        <h2># Projects</h2>
        <HexagonComponent />
      </div>
    </main>
  );
}
