import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos"
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
   

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePicsResponse(response) {
    setPhotos(response.data.photos)
  }

  function search(event) {
    event.preventDefault();
    let key = "b32c1c35aa482d801df6bo8beet80d48";
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(url).then(handleResponse);

    let picsKey = "b32c1c35aa482d801df6bo8beet80d48";
    let picsUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${picsKey}`;
    axios.get(picsUrl).then(handlePicsResponse)
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
      <Photos photos={photos} />
    </div>
  );
}
