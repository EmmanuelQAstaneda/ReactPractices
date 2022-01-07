import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import hitssImage from "./globalhitss.png";

const PrimerApp = ({ titulo, subtitulo }) => {
  let value = 101;
  let [counter, setCounter] = useState(value);

  function getRandomArbitrary() {
    setCounter(Math.floor(Math.random() * (32 - 0) + 0));
  }
  return (
    <Fragment>
      <h1>{titulo}</h1>
      <p> {subtitulo}</p>
      <img src={hitssImage} alt="" width="67%"></img>
      <table>
        <tr>
          <th>
            <button onClick={getRandomArbitrary}>Nombre del Ganador:</button>
          </th>
          <th>
            <p1>{nombres[counter]}</p1>
          </th>
        </tr>
      </table>
    </Fragment>
  );
};

PrimerApp.propTypes = {
  titulo: PropTypes.string.isRequired,
};
PrimerApp.defaultProps = {
  subtitulo: "Sorteo de dia de reyes: Global Hitss",
};

PrimerApp.propTypes = {
  value: PropTypes.number,
};

export default PrimerApp;

let nombres = [
  "Mariana Lucero Cruz Mendoza",
  "Alberto Octavio Ramirez Gomez",
  "Alejandro Orlando Dagio Lopez",
  "Orlando Alberto Silva Mendoza ",
  "Vannya Esnif Fuentes Mora",
  "Emmanuel Elias Castañeda",
  "It Zel Lamas Fernandez",
  "Jesus Enrique Manzano Alvarez",
  "Jorge Luna Pineda",
  "Roberto Javier Fuentes Mora",
  "Angel Uriel Peyrani Chavez",
  "Cecilia Mariela Martinez Reyes",
  "Olivia Araceli Herrera Reyes",
  "Oscar Gael Luna Barron",
  "Luis Orlando Mendiola Beristain",
  "Janet Mucino Nava",
  "Jesus Manuel Razo Vazquez",
  "Edilia Alcantara Gomez",
  "Brandon Martinez Hernandez",
  "David Perez Couto",
  "Hector Yair Gomez Rodriguez",
  "Oscar Moreno Rangel",
  "Lizbeth Leon Angeles",
  "Edith Lopez Salvador",
  "Eduardo De La Cruz Hernandez",
  "Jose Arellano Sanchez",
  "Lesly Viridiana Tovar Morales ",
  "Israel Fernando Fragoso Aguilar",
  "Estephane Joselyn Ramirez Mexicano ",
  "Carlos Diego Colexcua",
  "Alan Dahian Medina Herrera",
  "Francisco Javier De La Cruz Hernandez ",
];
