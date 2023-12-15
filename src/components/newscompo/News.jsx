import React, { useState, useEffect } from "react";
import Newsitem from "../newsitem/Newsitem";
import axios from "axios";

function News() {
  const [articles, setarticles] = useState([]);
  const [loading, setLoading] = useState([true]);
  

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=1d30d1cc056d444089a2d1ff245f6872"
        );
        setarticles(response.data.articles);
        setLoading(false);

      } catch (error) {
        
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className=" container">
        <h2 className="text-lg font-medium"> News Top Headlines</h2>
        {loading ? (<div className="text-center text-lg">Loading...</div>) :(
          <div className=" flex pt-4 items-center flex-wrap gap-4">
            {articles.map((item, index) => (
              <Newsitem
                key={index}
                title={item.title ? item.title.slice(0, 62) : "Title not available"}
                description={item.description ? item.description.slice(0, 102) : "Description not available"}
                imageUrl={item.urlToImage ? item.urlToImage : "https://images.moneycontrol.com/static-mcnews/2023/12/market_flat-7-770x433.jpg"}
                newsUrl={item.url}
              />
          
            ))}
         
          </div>
  )}
      </div>
    </>
  );
}
export default News;
