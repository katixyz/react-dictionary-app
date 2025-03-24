import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data.word);
  }

  function search(event) {
    event.preventDefault();
    let key = "b32c1c35aa482d801df6bo8beet80d48";
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(url).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
