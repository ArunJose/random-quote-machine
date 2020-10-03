import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState({});
  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data.quotes);
        setRandomQuote(
          data.quotes[Math.floor(Math.random() * data.quotes.length)]
        );
      });
  }, []);

  const handleNewQuote = () => {
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  };

  return (
    <div className="App">
      <div id="quote-box">
        <div id="text">{randomQuote.quote}</div>
        <div id="author">{randomQuote.author}</div>
        <button id="new-quote" onClick={handleNewQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
            '"' + randomQuote.quote + '" ' + randomQuote.author
          )}`}
        >
          Tweet this quote
        </a>
      </div>
    </div>
  );
}
