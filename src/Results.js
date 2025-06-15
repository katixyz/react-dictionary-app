import React from "react";
import Meaning from "./Meanings";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <br />
        <h2>{props.results.word}</h2>
        <em>
          <h6>{props.results.phonetic}</h6>
        </em>
        <br />
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
