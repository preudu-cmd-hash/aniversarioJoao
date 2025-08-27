import Styles from "./Footer.module.css"
import Feliz from "../../images/Feliz.png"
import Balao_Esquerda from "../../images/Balao_Esquerda.png"
import Balao_Direita from "../../images/Balao_Direita.png"



export const Footer = () => {


  return (
    <div className={Styles.Footer}>

      <div className={Styles.Aniversario}>

        <div className={Styles.ContainerE}>
            <img className={Styles.ImagemF} src={Balao_Esquerda} alt="" />
        </div>

        <div className={Styles.ContainerF}>
            <img className={Styles.ImagemF} src={Feliz} alt="" />
        </div>

        <div className={Styles.ContainerD}>
            <img className={Styles.ImagemF} src={Balao_Direita} alt="" />
        </div>

      </div>

      <div className={Styles.Criadores}>
          <p className={Styles.Texto_Criador}>Criado por César, Pedro, Gallo e Moon</p>
      </div>
    
    </div>
  ); 
};
