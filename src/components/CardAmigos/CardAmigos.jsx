import Pinguim from "../../images/pinguim.jpg";
import JoaoGabriel from "../../images/joaoGabriel.jpeg";
import Daniel from "../../images/daniel.jpeg";
import Poste from "../../images/poste.jpeg";
import { CardsProps } from "../CardsProps/CardsProps";
import { Carousel } from "react-bootstrap";

// Esta parte guarda os dados do map
const dados = [
  {
    id: 1,
    imagem: Pinguim,
    nome: "César",
    mensagem: "Lorem",
  },
  {
    id: 2,
    imagem: Pinguim,
    nome: "Pedro",
    mensagem: "Lorem",
  },
  {
    id: 3,
    imagem: Pinguim,
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
    imagem: Pinguim,
    nome: "Victor",
    mensagem: "Lorem",
  },
  {
    id: 6,
    imagem: Pinguim,
    nome: "Moon",
    mensagem:
      "Eu nunca pensei que um mlk que eu conheci em um servidor do minecraft fosse mudar tanto a minha vida. Parabéns amigo, eu amo muito você",
  },
  {
    id: 7,
    imagem: Pinguim,
    nome: "Gallo",
    mensagem: "Lorem",
  },
  {
    id: 8,
    imagem: Pinguim,
    nome: "Ivo",
    mensagem: "Lorem",
  },
  {
    id: 9,
    imagem: JoaoGabriel,
    nome: "João Gabriel",
    mensagem:
      "Po mano sei que não sou de falar mas te considero muito vc me apoiou em momentos muitos difíceis e sou muito grato por isso pode sempre contar comigo um fez aniversário ae seu idoso.",
  },
  {
    id: 10,
    imagem: Daniel,
    nome: "Daniel",
    mensagem:
      "Feliz aniversário irmão, muitos anos de vida para você, você e uma pessoa muita boa nunca se esqueça disso você merece o mundo irmão e só ter a força de vontade para pegar o que e seu, saiba que qualquer coisa estou aqui com você desejo muito sucesso na sua vida, sei que não estamos se falando muito recentemente acabamos seguindo um pouco separados mas saiba que você pra mim e um dos meus melhores amigos e isso não mudou e nem vai mudar não importa quanto tempo a gente fique sem se falar ou sem se ver e só me mandar uma mensagem que apareço em 2 minutos, enfim feliz aniversário e  muita paz nesse 'novo ano'",
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
