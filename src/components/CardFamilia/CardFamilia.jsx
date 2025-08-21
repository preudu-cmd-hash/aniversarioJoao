import { useState } from "react";
import styles from "./CardFamilia.module.css";

export const CardFamilia = () => {
  const mensagens = [
    { id: 1, nome: "Rosi", texto: "lorem", urlImg: "" },
    { id: 2, nome: "Julio", texto: "lorem", urlImg: "" },
    { id: 3, nome: "Jamir", texto: "lorem", urlImg: "" },
    { id: 4, nome: "Lucas", texto: "lorem", urlImg: "" },
    { id: 5, nome: "Mateus", texto: "lorem", urlImg: "" },
    { id: 6, nome: "Jailane", texto: "lorem", urlImg: "" },
    { id: 7, nome: "Dona Aparecida", texto: "lorem", urlImg: "" },
  ];

  const [cardAmpliado, setCardAmpliado] = useState(null);

  const toggleCard = (id) => {
    setCardAmpliado(cardAmpliado === id ? null : id);
  };

  return (
    <>
      <h1>Card da família</h1>
      <div className={styles.container}>
        <div className={styles.grid}>
          {mensagens.map((mensagem) => (
            <div
              key={mensagem.id}
              className={cardAmpliado === mensagem.id ? styles.ampliado : ""}
              onClick={() => toggleCard(mensagem.id)}
            >
              <div className={styles.imgCOntainer}>
                <img src={mensagem.urlImg} alt={mensagem.nome} />
              </div>
              <div className={styles.textContainer}>
                <p className={styles.text}>
                  {cardAmpliado === mensagem.id
                    ? mensagem.texto
                    : mensagem.texto.length > 25
                    ? mensagem.texto.slice(0, 25) + "..."
                    : mensagem.texto}
                </p>
                {mensagem.texto.length > 25 && (
                  <button
                    className={styles.button}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCard(mensagem.id);
                    }}
                  ></button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
