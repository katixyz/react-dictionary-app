import React from "react";
import "./Example.css";

export default function Example(props) {
    if (props.example) {
        return (
          <div className="example"> 
            <strong>Example: </strong>
            <em>
              <p>{props.example}</p>
            </em>
          </div>
        )
      } else {
        return null
      }
}