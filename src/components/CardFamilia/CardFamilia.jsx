import Pinguim from "../../images/pinguim.jpg";
import Julio from "../../images/julio.jpeg";
import Rosi from "../../images/rosi.jpeg";
import Lucas from "../../images/lucas.jpeg";
import Mateus from "../../images/mateus.jpeg";
import Jailane from "../../images/jailane.jpeg";
import Jamir from "../../images/jamir.jpeg";
import Marcio from "../../images/marcio.jpeg";
import DonaAparecida from "../../images/donaAparecida.jpeg";
import DonaFatima from "../../images/donaFatima.jpeg";
import { CardsProps } from "../CardsProps/CardsProps";
import { Carousel } from "react-bootstrap";

// Esta parte guarda os dados do map
const dados = [
  {
    id: 1,
    imagem: Rosi,
    nome: "Rosi",
    mensagem:
      "Hoje o dia amanheceu mais lindo é o dia que o Senhor Jesus preparou pra você meu filho ! Meus parabéns felicidades que vc consiga realizar todos os seus desejos na sua vida ,vc é minha fortaleza meu amigo te amo muito meu príncipe, meu coração selebra junto com vc este dia maravilhoso muitas bênçãos pra vc !😘❤️🎂🎊🎉☺️",
  },
  {
    id: 2,
    imagem: DonaAparecida,
    nome: "Dona Aparecida",
    mensagem: "Lorem",
  },
  {
    id: 3,
    imagem: Julio,
    nome: "Júlio",
    mensagem:
      "Feliz aniversário! Que Deus ilumine cada pensamento seu. E cada passo que você der,que seja com muita sabedoria.Te desejo uma vida próspera e cheia de realizações,e tudo de melhor... Uma chuva de bençãos é o que eu desejo pra você...🎉🥳🤗🎉🎊🫂",
  },
  {
    id: 4,
    imagem: Lucas,
    nome: "Lucas",
    mensagem: "Lorem",
  },
  {
    id: 5,
    imagem: Mateus,
    nome: "Mateus",
    mensagem: "Lorem",
  },
  {
    id: 6,
    imagem: Jailane,
    nome: "Jailane",
    mensagem: "Lorem",
  },
  {
    id: 7,
    imagem: Jamir,
    nome: "Jamir",
    mensagem: "Lorem",
  },
  {
    id: 8,
    imagem: DonaFatima,
    nome: "Dona Fátima",
    mensagem:
      "Hoje é um dia especial, mas nos leva a um mais especial, quando nascia um pequeno, mas lindo bebê, agora já um jovem, que continua lindo, carinhoso e amável, te amo. Você é muito importante.",
  },
  {
    id: 9,
    imagem: Marcio,
    nome: "Marcio",
    mensagem:
      "João, Feliz aniversário!! Que você realize todos os seus sonhos, que tenha muita saúde e felicidades sempre!!",
  },
  {
    id: 10,
    imagem: Marcio,
    nome: "Débora",
    mensagem:
      "João, hoje quero te desejar saúde, paz e felicidades! Que Deus te abençoe sempre, que Nossa Senhora esteja ao seu lado te guiando e protegendo de todo mal, que está nova fase da sua vida seja de amor e realizações de todos os seus desejos. Te amo muito Feliz aniversário 🎂 Sua prima Débora.",
  },
  {
    id: 11,
    imagem:
      "https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.6435-9/35364061_385217895313633_9094976858579009536_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGSgrT23auZSKxLnDLrflH2h9LdQOu0msuH0t1A67Say7glgqHHDAQNqcVe01xJ--A3KSnp4PbTW2wvtS7SM39J&_nc_ohc=P7XF6OUHqbMQ7kNvwENUt_m&_nc_oc=Adl0YiZ4FAdulWMgkifB6jpfkHuiLgKskH6sxmc3QEZ93OtCkN0Qq4oN8qUFCXAk5pF4BY4oAFa-yELwSvlHy3bK&_nc_zt=23&_nc_ht=scontent.fsdu12-1.fna&_nc_gid=8pJX3wpxYSatlP21k7VAnw&oh=00_AfUshJzdjSocmMV-jH_F92iTTpW4EOUi0C91zg7x5sCGaQ&oe=68D5D902",
    nome: "Junior",
    mensagem:
      "Meus parabéns meu sobrinho querido, que Deus te abençoe grandemente muitos anos de vida que tu continue sendo esse garoto bom para sua e toda sua família.Que Deus te abençoe, ti amo, teu tio Júnior",
  },
];

export const CardFamilia = () => {
  return (
    <>
      {/* Mapeamento dos dados da contante */}
      <Carousel indicators={false} interval={null}>
        {dados
          .reduce(
            (rows, key, index) =>
              (index % 3 === 0
                ? rows.push([dados[index]])
                : rows[rows.length - 1].push(dados[index])) && rows,
            []
          )
          .map((grupo, i) => (
            <Carousel.Item key={i}>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                }}
              >
                {grupo.map((dado) => (
                  <CardsProps
                    key={dado.id}
                    imagem={dado.imagem}
                    nome={dado.nome}
                    mensagem={dado.mensagem}
                  />
                ))}
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};
