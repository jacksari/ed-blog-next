import React, {Component} from 'react';
import MainMenu from "./MainMenu";
import styles from '../styles/Header.module.css'
//import styles from '../styles/Home.module.css'

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="https://icons-for-free.com/iconfiles/png/512/logo+react+react+js+icon-1320184811840217251.png" alt="ReactLogo"/>
                </div>
                <MainMenu/>
            </header>
        );
    }
}

export default Header;
