import "./style.css";

export default function CardInformacoes(props) {

  let nomeAnimalCachorro = 'Cachorro';
  let nomeAnimalGato = 'Gato';
  let informacoesCachorro = 'É um mamífero carnívoro da família dos canídeos.';
  let informacoesGato = 'É um mamífero carnívoro da família dos felídeos.';



  return (
    <div className="CardInformacao">
      <h3>Informação sobre o {props.tipoAnimal === 'cachorro' ? nomeAnimalCachorro: nomeAnimalGato}</h3>
      <p>{props.tipoAnimal === 'cachorro' ? informacoesCachorro : informacoesGato}</p>
    </div>
  );
}