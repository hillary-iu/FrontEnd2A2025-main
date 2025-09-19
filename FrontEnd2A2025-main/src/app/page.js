'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  // let cont = 0;
  const [cont, setCont] = useState(0);
  const[estilo, setEstilo] = useState('colorido')

  const subtrair = () => {
    setCont(cont - 1);
    console.log(cont);
  }

  const adicionar = () => {
    setCont(cont + 1);
    console.log(cont);
  }

  return (
    <div>
      <h1 className={styles.h1}>Hello World!</h1>
      <p className={styles.paragrafo}>Meu parágrafo</p>
      <button onClick={() => { adicionar() }}>Adicionar</button>
      <button onClick={() => { subtrair() }}>Subtrair</button>
      <p>Contagem {cont}</p>

      <button onClick={() => { setEstilo('colorido')}}>Estilo colorido</button>
      <button onClick={() => { setEstilo('cinza')}}>Estilo cinza</button>

      <div className={`${styles.box} ${estilo === 'colorido' ? styles.colorido : styles.cinza? estilo==='cinza': styles.cinza}`}>
    </div>
  </div>
  );
}
