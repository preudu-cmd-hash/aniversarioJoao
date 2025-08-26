import styles from "./CardsProps.module.css";

export const CardsProps = ({ imagem, nome, mensagem }) => {
  return (
    <div className={styles.container}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <h3 className={styles.nome}>{nome}</h3>
      <p className={styles.mensagem}>{mensagem}</p>
    </div>
  );
};
