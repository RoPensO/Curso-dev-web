import './style.css';

function Card(props) {
  return (
    <div className ='card card-escuro'>
      <p>{props.data}</p>
      <h2>{props.titulo}</h2>
      <p>{props.empresa}</p>
      <p>{props.paragrafo}</p>
    </div>
  );
}

export default Card;
