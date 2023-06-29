import './Card.css';

function Card(props) {
  return (
    <div className="card">
      <p>{props.data}</p>
      <h3>{props.titulo}</h3>
      <p>{props.empresa}</p>
      <span>{props.paragrafo}</span>
    </div>
  );
}

export default Card;
