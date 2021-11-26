import React, { Fragment } from "react";
import PropTypes from "prop-types";
import evr from "./conquer.jpg";

const PrimerApp = ({ titulo, subtitulo }) => {
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <Fragment>
      <h1>{titulo}</h1>
      <p> {subtitulo}</p>
      <img src={evr} alt="" width="47%"></img>
      <button onClick={handleAdd}>Conquer Wolrd Official Video</button>
    </Fragment>
  );
};

PrimerApp.propTypes = {
  titulo: PropTypes.string.isRequired,
};
PrimerApp.defaultProps = {
  subtitulo: "Excavator is a Metal Band From Mexico.",
};

export default PrimerApp;
