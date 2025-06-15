import React from "react";

export default function Meanings(props) {
  console.log(props);
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definition}</p>
      <em>
        <p>{props.meaning.example}</p>
      </em>
    </div>
  );
}
//  <p>{props.meaning.definition}</p>
// <p>{props.meaning.example}</p>
