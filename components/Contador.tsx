import React, { useState } from "react";

export interface ContadorProps {
  valorInicial: number;
}

export function Contador(props: ContadorProps) {
  const [valor, setValor] = useState(props.valorInicial);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Diminuir() {
    setValor(valor - 1);
  }

  
  function eMaiorQueDez() {
    return valor >= 10;
  }

  return ( 
  <div>
  <h2 style={ {color: valor > 10 ? 'red' : 'blue' }}> Contador = {valor}</h2>
  {eMaiorQueDez() && <h3>Mais que 10</h3>}
  <button onClick={Adicionar}>Adicionar</button>
  <button onClick={Diminuir}>Remover</button>
  </div>
  );
}


//Ou de uma forma mais prática fazendo a desestruturação:
// export function Contador({ valorInicial }: ContadorProps)
//{
// const [valor, setValor] = useState(valorInicial);
//function Adicionar(){
 // setValor(valor + 1);
//}
//
// return (
 // <div>
// <h2>Contador = {valor}</h2>
//  <button onClick={Adicionar}>Adicionar</button>
//  </div> 
 // );
//}




