import React from "react";
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsFeed.css";

const NewsFeed = () => {
  // declare useState
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="news-section container pt-4">
      {/* Mapping updating news */}
      {news.map((News) => (
        <NewsCard news={News}></NewsCard>
      ))}
    </div>
  );
};

export default NewsFeed;
