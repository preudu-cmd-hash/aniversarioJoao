import Pinguim from "../../images/pinguim.jpg";
import JoaoGabriel from "../../images/joaoGabriel.jpeg";
import Pedro from "../../images/pedro.jpg";
import Cesar from "../../images/cesar.jpg";
import Daniel from "../../images/daniel.jpeg";
import God from "../../images/god.png";
import Victor from "../../images/victor.jpeg";
import Poste from "../../images/poste.jpeg";
import Moon from "../../images/moon.jpg";
import Gallo from "../../images/gallo.png";
import { CardsProps } from "../CardsProps/CardsProps";
import { Carousel } from "react-bootstrap";

// Esta parte guarda os dados do map
const dados = [
  {
    id: 1,
    imagem: Cesar,
    nome: "César",
    mensagem:
      "Salve irmão não tenho muito pra te falar mais saiba que pode contar comigo a qualquer hora Tmj feliz aniversário irmão",
  },
  {
    id: 2,
    imagem: Pedro,
    nome: "Pedro",
    mensagem:
      "Bom, você sabe que não sou muito bom com palavras, mas te desejo tudo de bom nessa tua vida, que tu consiga conquistar tudo que tu quer e deseja, e só tenha felicidades e alegrias irmão, tmj sempre, se precisar de alguma coisa sabe que pode contar comigo. Feliz aniversário mano!",
  },
  {
    id: 3,
    imagem: God,
    nome: "God",
    mensagem:
      "Salve João. É seu aniversário e não pude ficar de fora, MEUS PARABÉNS 🥳 🎂Mano te desejo tudo de bom e do melhor, fico muito feliz de ter você como amigo, que suas conquistas seja uma pequena demostração de tudo que te espera, você é Demais 🤜🏽🤛🏽Quem diria que uma amizade pela Internet pode ser tão foda assim 😆😆 não esqueço do dia que estavamos dançando e bebendo na casa do César kkkkk nunca vou esquecer kkkkk bom... é isso, Tmj 😝",
  },
  {
    id: 4,
    imagem: Poste,
    nome: "Matheus",
    mensagem:
      "Fala irm, quero te desejar Parabéns irm, desejo tudo de bom pra ti. Tmj sempre nego.",
  },
  {
    id: 5,
    imagem: Victor,
    nome: "Victor",
    mensagem:
      "Vi aqui na minha agenda que hoje é o seu 🫵🏻 aniversário. Feliz vida, João! Desejo tudo de bom na sua vida, que Deus Pai o abençoe hoje e sempre! Amigo do peito é colete o resto é bala🤟🏻💪🏻🔥 Se quiser textão vai ler a bíblia.",
  },
  {
    id: 6,
    imagem: Moon,
    nome: "Moon",
    mensagem:
      "Eu nunca pensei que um mlk que eu conheci em um servidor do minecraft fosse mudar tanto a minha vida. Parabéns amigo, eu amo muito você",
  },
  {
    id: 7,
    imagem: JoaoGabriel,
    nome: "João Gabriel",
    mensagem:
      "Po mano sei que não sou de falar mas te considero muito vc me apoiou em momentos muitos difíceis e sou muito grato por isso pode sempre contar comigo um fez aniversário ae seu idoso.",
  },
  {
    id: 8,
    imagem: Daniel,
    nome: "Daniel",
    mensagem:
      "Feliz aniversário irmão, muitos anos de vida para você, você e uma pessoa muita boa nunca se esqueça disso você merece o mundo irmão e só ter a força de vontade para pegar o que e seu, saiba que qualquer coisa estou aqui com você desejo muito sucesso na sua vida, sei que não estamos se falando muito recentemente acabamos seguindo um pouco separados mas saiba que você pra mim e um dos meus melhores amigos e isso não mudou e nem vai mudar não importa quanto tempo a gente fique sem se falar ou sem se ver e só me mandar uma mensagem que apareço em 2 minutos, enfim feliz aniversário e  muita paz nesse 'novo ano'",
  },
  {
    id: 9,
    imagem: Gallo,
    nome: "Gallo",
    mensagem:
      "Salve CARIOCA SFD! Feliz aniversário man. Lembro das risadas, as calls do nada q me fizeram rir até quando está a destruído psicologicamente, João, muito obrigado por ter sido esse amigo e parceiro incrível q vc é. E por ter me ajudado a cuidar desse bando de maluco q tem na Party do RPG... É suicida e vai indo até criança maluca. Muito obrigada por ser qm vc é Man. Mesmo torcendo pra BOSTA DO FLAMENGO! Te respeito e considero família, Tmj Man. Qualquer dia eu colo no Rio de grupão, eu, César e Ivo kkkk. Tenho certeza q vai ser um rolê incrível q nem as madrugadas em call trocando ideia kkkk. Tmj EMO SFD, feliz aniversário, Tmj!",
  },
];

export const CardAmigos = () => {
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
