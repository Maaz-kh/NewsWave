import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinners from "./Spinners";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const { apiKey } = props;
  const [newsArticles, setNewsArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const [loading, setLoading] = useState(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchNewsArticles = async () => {
    setLoading(true);
    props.setProgress(10);

    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${props.pageSize}`;
      const response = await fetch(url);
      const data = await response.json();

      document.title = `${capitalizeFirstLetter(props.category)} - NewsWave`;
      props.setProgress(100);

      setNewsArticles((prevArticles) => {
        const existingUrls = new Set(prevArticles.map((article) => article.url));
        const newArticles = data.articles.filter(
          (article) => !existingUrls.has(article.url)
        );
        return [...prevArticles, ...newArticles];
      });

      setTotalArticles(data.totalResults);
    } catch (error) {
      console.error("Error fetching news articles:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setNewsArticles([]); // Clear previous articles
    setPage(1);          
    fetchNewsArticles();
  }, [props.category, props.pageSize]); 

  useEffect(() => {
    fetchNewsArticles(); // Fetch when page changes
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mx-auto lg:max-w-screen-lg pt-16 my-6 mb-4">
      <h2 className="text-center mb-6 font-bold text-2xl">NewsWave - Top Headlines</h2>
      

      <InfiniteScroll
        dataLength={newsArticles.length}
        next={fetchMoreData}
        hasMore={newsArticles.length < totalArticles}
        loader={<Spinners />}
        style={{ overflow: "auto" }}
      >
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mx-auto w-full ">

          {newsArticles.map((data) => (
            <NewsItems
              key={data.url}
              title={data.title ? data.title.split(" ").slice(0, 8).join(" ") : ""}
              description={
                data.description
                  ? data.description.split(" ").slice(0, 16).join(" ")
                  : ""
              }
              imageUrl={data.urlToImage}
              newsUrl={data.url}
              author={data.author}
              source={data.source.name}
              date={data.publishedAt}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
