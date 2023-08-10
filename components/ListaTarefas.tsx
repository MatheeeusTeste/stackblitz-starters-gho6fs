import { useState } from 'react';

export function ListaTarefas() {

  const [lista, setLista] = useState(
    ['Banana', 'Maça', 'Sorvete']);
    return (
      <>
      <div>Lista</div>
      <ul>
        {lista.map((item) => {
          return (
            <li>
              <Like> {item} </Like>
              </li>
          );
        })}
        </ul>
        </>
    );