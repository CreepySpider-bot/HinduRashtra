import React from "react";
import "./News.css"
function News() {
  const latestNews = [
    {
      title: "New Hindu Temple Opens in New York City",
      imageUrl: "image1.jpg",
      articleUrl: "article1.html",
    },
    {
      title:
        "Hindu Festival Celebrated in India with Traditional Dance and Music",
      imageUrl: "image2.jpg",
      articleUrl: "article2.html",
    },
    {
      title: "Hindu Leaders Call for Peaceful Coexistence with Other Religions",
      imageUrl: "image3.jpg",
      articleUrl: "article3.html",
    },
  ];

  const popularArticles = [
    {
      title: "The Importance of Yoga in Hinduism",
      imageUrl: "image4.jpg",
      articleUrl: "article4.html",
    },
    {
      title: "The Bhagavad Gita: A Guide to Hindu Philosophy and Spirituality",
      imageUrl: "image5.jpg",
      articleUrl: "article5.html",
    },
    {
      title: "Hinduism and the Environment: A Call to Action",
      imageUrl: "image6.jpg",
      articleUrl: "article6.html",
    },
  ];

  function NewsList({ id,items }) {
  return (
    <ul id={id}>
      {items.map((item, index) => (
        <li key={index}>
          <h3>{item.title}</h3>
          <img src={item.imageUrl} alt={`Image for ${item.title}`} />
          <a href={item.articleUrl}>Read More</a>
        </li>
      ))}
    </ul>
  );
}

  
  return (
    <section id="news">
      <h2>News</h2>
      <div id="news1">
        <h2>Latest News</h2>
        <NewsList id="latest-news" items={latestNews} />
      </div>
      <div id="news2">
        <h2>Popular Articles</h2>
        <NewsList id="popular-articles" items={popularArticles} />
      </div>
    </section>
  );
}

export default News;
