import React from "react";
import { Like } from "../components/Like"; // Verifique o caminho correto para o seu arquivo Like
import { Contador } from '../components/Contador';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      Olá turma!
      <Like>Like</Like>
      <Contador valorInicial={1} />
      <Contador valorInicial={10} />
    </div>
  );
}
