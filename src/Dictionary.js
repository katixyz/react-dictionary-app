import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
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
      <div className="search-form">
      <h4 className="instruction">Search for the meaning of any word</h4>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} placeholder="e.g. sun, book, wine, ..."/>
      </form>
      </div>
      <Results results={results} />
    </div>
  );
}
