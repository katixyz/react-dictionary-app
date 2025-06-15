import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Kati Zech, open-sourced on{" "}
          <a
            href="https://github.com/katixyz/react-dictionary-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://splendorous-alfajores-553cc2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          ✨
        </footer>
      </div>
    </div>
  );
}
