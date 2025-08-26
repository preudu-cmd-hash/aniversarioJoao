import styles from "./CardFamilia.module.css";
import Pinguim from "../../images/pinguim.jpg";
import { CardsProps } from "../CardsProps/CardsProps";
import { Carousel } from "react-bootstrap";

// Esta parte guarda os dados do map
const dados = [
  {
    id: 1,
    imagem: Pinguim,
    nome: "Rosi",
    mensagem: "Lorem",
  },
  {
    id: 2,
    imagem: Pinguim,
    nome: "Dona Aparecida",
    mensagem: "Lorem",
  },
  {
    id: 3,
    imagem: Pinguim,
    nome: "Júlio",
    mensagem: "Lorem",
  },
  {
    id: 4,
    imagem: Pinguim,
    nome: "Lucas",
    mensagem: "Lorem",
  },
  {
    id: 5,
    imagem: Pinguim,
    nome: "Mateus",
    mensagem: "Lorem",
  },
  {
    id: 6,
    imagem: Pinguim,
    nome: "Jailane",
    mensagem: "Lorem",
  },
  {
    id: 7,
    imagem: Pinguim,
    nome: "Jamir",
    mensagem: "Lorem",
  },
  {
    id: 8,
    imagem: Pinguim,
    nome: "Dona Fátima",
    mensagem: "Lorem",
  },
];

export const CardFamilia = () => {
  return (
    <>
      {/* Mapeamento dos dados da contante */}
      <Carousel>
        {dados.map((dado) => (
          <Carousel.Item key={dado.id} interval={1000}>
            <div className={styles.container}>
              <CardsProps
                imagem={dado.imagem}
                nome={dado.nome}
                mensagem={dado.mensagem}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
