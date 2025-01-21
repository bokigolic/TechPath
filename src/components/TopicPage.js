import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TopicPage = () => {
  const { name } = useParams();
  const [devArticles, setDevArticles] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [placeholderPost, setPlaceholderPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);

        // Dev.to API (članci za određenu temu)
        const devResponse = await fetch(`https://dev.to/api/articles?tag=${name}`);
        const devData = await devResponse.json();
        setDevArticles(devData.slice(0, 3)); // Prikazujemo 3 članka

        // Programming Quotes API sa CORS proxy-jem
        const quotesResponse = await fetch(
          `https://cors-anywhere.herokuapp.com/https://programming-quotes-api.herokuapp.com/quotes`
        );
        const quotesData = await quotesResponse.json();
        setQuotes(quotesData.slice(0, 2)); // Prikazujemo 2 citata

        // JSONPlaceholder API (testni sadržaj)
        const placeholderResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${Math.ceil(Math.random() * 100)}`
        );
        const placeholderData = await placeholderResponse.json();
        setPlaceholderPost(placeholderData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [name]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{name.toUpperCase()} Resources</h1>

      {/* Prikaz JSONPlaceholder posta */}
      {placeholderPost && (
        <div>
          <h2>Test Post</h2>
          <h3>{placeholderPost.title}</h3>
          <p>{placeholderPost.body}</p>
        </div>
      )}

      {/* Prikaz članaka iz Dev.to API-ja */}
      <h2>Articles from Dev.to</h2>
      <ul>
        {devArticles.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Prikaz citata iz Programming Quotes API-ja */}
      <h2>Inspirational Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>
            <blockquote>"{quote.en}"</blockquote>
            <p>- {quote.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicPage;
