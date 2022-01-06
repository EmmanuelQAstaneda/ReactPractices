import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import hitssImage from "./globalhitss.png";

const PrimerApp = ({ titulo, subtitulo }) => {
  let value = 0;
  let [counter, setCounter] = useState(value);

  function getRandomArbitrary() {
    setCounter(Math.floor(Math.random() * (30 - 1) + 1));
  }
  return (
    <Fragment>
      <h1>{titulo}</h1>
      <p> {subtitulo}</p>
      <img src={hitssImage} alt="" width="67%"></img>
      <table>
        <tr>
          <th>
            <button onClick={getRandomArbitrary}>Numero Ganador:</button>
          </th>
          <th>
            <p1>{counter}</p1>
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
