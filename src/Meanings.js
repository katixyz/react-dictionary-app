import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section className="card">

      <h4>{props.meaning.partOfSpeech}</h4>
      <div className="definition">
        <strong>Definition: </strong>{props.meaning.definition}
      </div>
      <Example example={props.meaning.example} />
      <Synonyms synonyms={props.meaning.synonyms} />
      </section>
      
    </div>
  );
}

