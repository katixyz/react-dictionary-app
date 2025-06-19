import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example"

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <strong>Definition: </strong>
      <p>{props.meaning.definition}</p>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
      <Example example={props.meaning.example} />
          </div>
  );
}

