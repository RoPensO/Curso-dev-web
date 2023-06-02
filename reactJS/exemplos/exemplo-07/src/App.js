import "./App.css";
import { useState } from "react";
import Topo from "./componentes/topo";
import CardAnimal from "./componentes/cardAnimal";
import CardInformacoes from "./componentes/cardInformacoes";

export default function App() {
  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  return (
    <div className="App">
      <Topo clickAlterarAnimal = {alterarState}/>
      <CardAnimal tipoAnimal={tipoDoComponenteCard} />
      <CardInformacoes tipoAnimal={tipoDoComponenteCard} />
    </div>
  );
}
