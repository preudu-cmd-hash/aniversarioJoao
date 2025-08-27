import Pinguim from "../../images/pinguim.jpg";
import Julio from "../../images/julio.jpeg";
import Rosi from "../../images/rosi.jpeg";
import Lucas from "../../images/lucas.jpeg";
import Mateus from "../../images/mateus.jpeg";
import Jailane from "../../images/jailane.jpeg";
import Jamir from "../../images/jamir.jpeg";
import Marcio from "../../images/marcio.jpeg";
import Rafa from "../../images/rafa.jpeg";
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
    mensagem:
      "João aqui é a vó, quero te desejar um feliz aniversário que seus caminhos sejam abertos em nome de Jesus! Essa mensagem com muito amor e carinho, te amo muito 😘❤️ vó Aparecida",
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
    mensagem:
      "Parabéns João! Hoje você completa 21 anos e fico impressionado como o tempo passa, ontem mesmo você era um pinguinho de gente, enfim rsrs. O que dizer sobre essa idade... Uma idade que marca não só novas conquistas, mas também mais responsabilidades e maturidade, antigamente a maioridade era com 21 anos. Que essa fase traga sabedoria para suas escolhas, força para correr atrás dos seus objetivos e alegria para aproveitar cada momento da vida. Estarei sempre torcendo por você, sempre! Feliz aniversário irmão! Eu te amo muito! Nunca se esqueça disso Lucas",
  },
  {
    id: 5,
    imagem: Mateus,
    nome: "Mateus",
    mensagem:
      "Feliz aniversário, João Vitor. Que Deus sempre lhe abençoe e te conceda muitas alegrias e saúde, tenho muito orgulho de você, sempre me ensinou a ser mais leve, é um menino muito carinhoso e cuidadoso continue assim. Saudades de você, te amo!!!!",
  },
  {
    id: 6,
    imagem: Jailane,
    nome: "Jailanyi",
    mensagem:
      "Feliz aniversário, João! 🎉 Hoje é um dia mais que especial e quero desejar a você toda felicidade do mundo. Que Deus esteja sempre ao seu lado, iluminando seus caminhos, fortalecendo sua fé e derramando bênçãos sem medidas sobre a sua vida. Que nunca te falte saúde, paz, sabedoria e alegria.  Que cada conquista seja motivo de gratidão e que os sonhos do seu coração se realizem segundo a vontade de Deus, que é sempre perfeita e boa. Poderia continuar aqui te desejando coisas boas o dia todo, porque você merece! Continue sendo essa pessoa maravilhosa e de coração bom ❤️ Aproveite muito o seu dia e que venha um novo ano de vida ainda mais abençoado! Amo você ❤️ Ass Jay",
  },
  {
    id: 7,
    imagem: Jamir,
    nome: "Jamir",
    mensagem:
      "João. Hoje celebramos mais um ano da sua vida, e não poderia deixar passar em branco o quanto você é especial para mim. Você não é apenas meu sobrinho, mas também meu amigo, meu parceiro de conversas e confidências. A vida nos deu um laço de família, mas foi sua forma de ser — leal, divertido, generoso e único — que fez com que nossa amizade fosse ainda mais forte. É bonito ver como você cresce e amadurece a cada ano, sem perder a alegria, a energia e essa capacidade de me fazer  rir (mesmo quando é às custas do seu novo corte de cabelo que revelou suas  orelhas há tempos desaparecidas ! 😂). Tenho orgulho da pessoa que você é e de tudo que ainda vai conquistar. Desejo que essa nova fase da sua vida seja repleta de realizações, saúde e momentos de felicidade verdadeira. Que você siga firme nos seus sonhos e que nunca falte coragem para ser quem você é de verdade. Lembre-se: você não está sozinho. Sempre terá em mim não só um tio, mas alguém que te apoia, te admira e torce por cada passo seu. Aproveite seu dia, celebre cada instante e guarde no coração a certeza de que é muito amado. Feliz aniversário, João! 🎉 Que venham muitos anos de vida, de histórias para contar e de sorrisos para compartilhar. Do tio que te ama muito JAMIR",
  },
  {
    id: 8,
    imagem: DonaFatima,
    nome: "Dinda",
    mensagem:
      "Hoje é um dia especial, mas nos leva a um mais especial, quando nascia um pequeno, mas lindo bebê, agora já um jovem, que continua lindo, carinhoso e amável, te amo. Você é muito importante.",
  },
  {
    id: 9,
    imagem: Marcio,
    nome: "Márcio",
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
      "Meus parabéns meu sobrinho querido, que Deus te abençoe grandemente muitos anos de vida, que tu continue sendo esse garoto bom para sua e toda sua família. Que Deus te abençoe, te amo, teu tio Júnior",
  },
  {
    id: 12,
    imagem: Rafa,
    nome: "Rafa",
    mensagem:
      "Feliz aniversário João! Que Deus abençoe muito sua vida, realizando todos seus sonhos e objetivos!! Estou muito feliz em poder comemorar junto contigo esse dia tão especial 🥰, você mora no meu coração, e nunca deixou de ser meu irmão mais novo ❤️ Beijos Rafa",
  },
  {
    id: 13,
    imagem:
      "https://scontent.fsdu12-2.fna.fbcdn.net/v/t39.30808-1/470210455_8985091134918835_7125534607248291009_n.jpg?stp=dst-jpg_p100x100_tt6&_nc_cat=108&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHFv0CcSPZhawsNuRfnkXQib1JNaH7cZqdvUk1oftxmp7sScQkVkgkC9oGKHbI6okhSr6Srt5ogLieHlaw1BOQ2&_nc_ohc=I5YptZdyTYIQ7kNvwEJhUGm&_nc_oc=Adn1ywZ9lWYQzPIZbGEIkaa9olSdCnUBuilDFvx6R7mT1wKkBeMOlTuzpQyKJs0eQpS1kU_eMTWf3a1vHEq69Eww&_nc_zt=24&_nc_ht=scontent.fsdu12-2.fna&_nc_gid=grQHvsNqGl2r4vqDsQPwwQ&oh=00_AfVLrLYZMlGFjRe6xkWyhJyw_OokUhQ0UWah9eCb-QBgMg&oe=68B4D3AC",
    nome: "Milca",
    mensagem:
      "João?! Amor da vida da prima!!! Passando p te desejar o melhor: saúde, sucesso, amor, paz... Saiba q eu sempre estarei aqui p vc e seus irmãos! Nesta data, oro p que Jesus te abençoe e Nossa Senhora te ilumine infinitamente! Grande Bj no seu coração e um forte abraço da prima!!!! Te amo muitao e p sempre!!!!",
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
