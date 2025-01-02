import Image from 'next/image';
import styles from './page.module.css';

function Highlight({ children }) {
    return <span className={styles.highlight}>{children}</span>;
}
  
function Icon({ src, alt, width = 32, height = 32 }) {
    return <Image style={styles.icon} src={src} alt={alt} width={width} height={height} />;
}

export default { Highlight, Icon };