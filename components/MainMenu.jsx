import React, {Component} from 'react';
import Link from 'next/link'
import styles from '../styles/MainMenu.module.css'

class MainMenu extends Component {
    render() {
        return (
            <nav className={styles.nav}>
                <Link className={styles.link} href="/">Home</Link>
                <Link className={styles.link} href="/nosotros">Nosotros</Link>
                <Link className={styles.link} href="/contacto">Contacto</Link>

            </nav>
        );
    }
}

export default MainMenu;
