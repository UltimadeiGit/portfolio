import Image from 'next/image';
import styles from './page.module.css';

function Highlight({ children }) {
    return <span className={styles.highlight}>{children}</span>;
}
  
function Icon({ src, alt, width = 32, height = 32, padding = "0px", margin = "0px" }) {
    return <Image style={{...styles.icon, padding: padding, margin: margin}} src={src} alt={alt} width={width} height={height} />;
}

function SideLink({text, href}){
    return (<div>
        <div className={styles.center}>{text}</div>
        <a className={styles.link} href={href}>{href}</a>
    </div>);
}

export default { Highlight, Icon, SideLink };