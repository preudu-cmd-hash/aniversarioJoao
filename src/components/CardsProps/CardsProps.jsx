import { Carousel } from "react-bootstrap";
import stylesProps from "./CardsProps.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const CardsProps = ({ imagem, nome, mensagem }) => {
  // Propriedades dos cards que serão utilizados nesse projeto
  return (
    <div className={stylesProps.containerProps}>
      <img src={imagem} alt={nome} className={stylesProps.imagem} />
      <h3 className={stylesProps.nome}>{nome}</h3>
      <p className={stylesProps.mensagem}>{mensagem}</p>
    </div>
  );
};
