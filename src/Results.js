import React from "react";
import Meaning from "./Meanings";
import "./Results.css";

export default function Results(props) {
  console.log(props);
  if (props.results) {
    return (
      <div className="Results">
        <section className="card">
        <h2>{props.results.word}</h2>
        <em>
          <h6>{props.results.phonetic}</h6>
        </em>
        </section>
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
