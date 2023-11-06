import { useState } from 'react'
import styles from '../styles/Nav/nav.module.css'

function Nav(){

    const [isNavActive, setNavActive] = useState(false);

    const toggleNav = () => {
      setNavActive(!isNavActive);
    };

    return(
        <>
            <nav className={`${styles.nav} ${isNavActive ? styles.active : ''}`}>
                <div>
                    <h1 className={styles.nome}>Silencio</h1>
                </div>
                <button className={styles.hamburger} onClick={toggleNav}></button>
                <div className={styles.list}>
                        <ul>
                            <li>
                                <a href='#'>Home</a>
                            </li>

                            <li>
                                <a href='#'>Livros</a>
                            </li>

                            <li>
                                <a href='#'>Favoritos</a>
                            </li>
                        </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
