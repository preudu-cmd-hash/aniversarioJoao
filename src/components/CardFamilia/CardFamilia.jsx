import styles from "./CardFamilia.module.css";
import Pinguim from "../../images/pinguim.jpg";
import { CardsProps } from "../CardsProps/CardsProps";

// Esta parte guarda os dados do map
const dados = [
  {
    imagem: Pinguim,
    nome: "Rosi",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Dona Aparecida",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Júlio",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Lucas",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Mateus",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Jailane",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Jamir",
    mensagem: "Lorem",
  },
  {
    imagem: Pinguim,
    nome: "Dona Fátima",
    mensagem: "Lorem",
  },
];

export const CardFamilia = () => {
  return (
    <>
      {/* Mapeamento dos dados da contante */}
      <div className={styles.container}>
        {dados.map((dado) => (
          <CardsProps
            imagem={dado.imagem}
            nome={dado.nome}
            mensagem={dado.mensagem}
          />
        ))}

        {/* Props de uma forma menos manutenível */}

        {/* <CardsProps imagem={Pinguim} nome="Rosi" mensagem="Lorem" />
        <CardsProps nome="Dona Aparecida" mensagem="Lorem" />
        <CardsProps nome="Júlio" mensagem="Lorem" />
        <CardsProps nome="Lucas" mensagem="Lorem" />
        <CardsProps nome="Mateus" mensagem="Lorem" />
        <CardsProps nome="Jamir" mensagem="Lorem" />
        <CardsProps nome="Jailane" mensagem="Lorem" />
        <CardsProps nome="Dona Fátima" mensagem="Lorem" /> */}
      </div>
    </>
  );
};
