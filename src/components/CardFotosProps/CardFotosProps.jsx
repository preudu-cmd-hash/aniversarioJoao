import Styles from "./CardFotosProps.module.css";
import Perfil from "../../images/Perfil.jpg"
import Imagem1 from "../../images/Imagem1.webp"
import Favorito from "../../images/Favorito.png"


export const CardFotosProps = () => {
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
                <img className={Styles.Imagens} src={Imagem1} alt="" />

            </div>

            <div className={Styles.Status}>

                <div className={Styles.Status1}>

                </div>

                <div className={Styles.Status2}>
                    <img className={Styles.Icone} src={Favorito} alt="" />
                </div>

            </div>

        </div>
    
    
    
    </>
);

}

