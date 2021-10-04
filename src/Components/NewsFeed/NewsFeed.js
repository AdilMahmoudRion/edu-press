import React from "react";
import { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("./FakeData.JSON")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="news-section container pt-4">
      {news.map((News) => (
        <NewsCard news={News}></NewsCard>
      ))}
    </div>
  );
};

export default NewsFeed;
