import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <strong>Definition: </strong>
      <p>{props.meaning.definition}</p>
      <br />
      <strong>Synonyms: </strong>
      <Synonyms synonyms={props.meaning.synonyms} />
      <br />
      <strong>Example: </strong>
      <em>
        <p>{props.meaning.example}</p>
      </em>
      <br />
    </div>
  );
}
//  <p>{props.meaning.definition}</p>
// <p>{props.meaning.example}</p>
