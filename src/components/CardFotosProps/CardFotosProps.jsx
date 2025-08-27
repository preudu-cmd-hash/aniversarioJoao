import Styles from "./CardFotosProps.module.css";
import Perfil from "../../images/Perfil.jpg"
import Imagem1 from "../../images/Imagem1.webp"
import Favorito from "../../images/Favorito.png"
import Coracao from "../../images/Coracao.png"
import Comentario from "../../images/Comentario.png"

export const CardFotosProps = ({imagem}) => {
return (
    <>
        <div className={Styles.Card}>

            <div className={Styles.Perfil}>
                <div className={Styles.Container_Perfil}>
                    <div className={Styles.Perfil_Imagem}>
                        <img className={Styles.Imagem_Usuario} src={Perfil} alt="" />
                    </div>
                    
                    <p className={Styles.Usuario}>joaovitorfp10</p>

                </div>
            </div>

            <div className={Styles.Imagem}>
                <img className={Styles.Imagens} src={imagem} alt="" />

            </div>

            <div className={Styles.Status}>

                <div className={Styles.Status1}>
                    <img className={Styles.Icone2} src={Coracao} alt="" />
                    <img className={Styles.Icone3} src={Comentario} alt="" />
                </div>

                <div className={Styles.Status2}>
                    <img className={Styles.Icone} src={Favorito} alt="" />
                </div>

            </div>

        </div>
    
    
    
    </>
);

}

