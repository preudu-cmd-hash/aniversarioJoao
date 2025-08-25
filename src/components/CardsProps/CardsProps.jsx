export const CardsProps = ({ imagem, nome, mensagem }) => {
  return (
    <div>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <p>{mensagem}</p>
    </div>
  );
};
