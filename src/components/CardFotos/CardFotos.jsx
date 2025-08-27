import Styles from "./CardFotos.module.css";
import { CardFotosProps } from "../CardFotosProps/CardFotosProps";
import Imagem1 from "../../images/Imagem1.webp";
import DonaAparecida2 from "../../images/donaAparecida2.jpeg";
import SeuAltair from "../../images/seuAltair.jpeg";

export const CardFotos = () => {
  return (
    <div className={Styles.fotos}>
      <div className={Styles.Container_texto}>
        <h1 className={Styles.Titulo}>🎉 Parabéns, João! 🎂</h1>;
        <p className={Styles.Texto}>
          Que o seu dia seja cheio de alegria, sorrisos e boas lembranças. Que
          cada novo ano traga mais conquistas, saúde e felicidade. Você merece
          tudo de melhor hoje e sempre. Aproveite muito o seu aniversário! 🥳
        </p>
      </div>

      <div className={Styles.Container_imagens}>
        <CardFotosProps imagem={Imagem1} />
        <CardFotosProps imagem={DonaAparecida2} />
        <CardFotosProps imagem={SeuAltair} />
      </div>
    </div>
  );
};
