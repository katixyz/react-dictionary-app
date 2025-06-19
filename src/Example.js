import React from "react";

export default function Example(props) {
    if (props.example) {
        return (
          <div>
            <strong>Example: </strong>
            <em>
              <p>{props.example}</p>
            </em>
            <br />
          </div>
        )
      } else {
        return null
      }
}