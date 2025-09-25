'use client';
import { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import image from 'next/image'

export default function Header() {
    const [show, setShow] = useState(false);
    const[icone, setIcone] = useState(/images/pena.png);

    const clique = () => {
        setShow(!show);
        setIcone('/images/tresflower.pnj')
    }

    return (
        <>
            <header className={styles.HeaderMobile}>
                <div onClick={() => { clique() }}>x<image scr={'/imagens/pena.png'} alt='menu' width={30} height={30}></image></div>
                {show &&
                    <div style={{ height: '200px', border: '2px solid black' }}>
                        {/*<p>MOBILE</p>*/}
                        <image src={'pena.png'} height={50} width={50} alt='imagem'></image>
                    </div>
                }
            </header>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link className={styles.link} href='/'>Home</Link></li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                            </ul>

                        </li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                            </ul>

                        </li>
                        <li className={styles.liMenu}><Link className={styles.link} href='/produtos'>Produtos</Link>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href='/produtos'>Pesquisar</Link></li>
                            </ul>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}