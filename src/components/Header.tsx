import styles from './Header.module.css';


export function Header() {
    return (
        <header className={styles.header}>
           <img src='/ignite-logo.svg' alt='Logo Marca'/>
        </header>
    )
}