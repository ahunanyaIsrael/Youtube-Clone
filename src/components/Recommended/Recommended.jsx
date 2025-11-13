import React, { useEffect, useState } from "react";
import "./Recommended.css";
import thumnail1 from "../../assets/thumbnail1.png";
import thumnail2 from "../../assets/thumbnail2.png";
import thumnail3 from "../../assets/thumbnail3.png";
import thumnail4 from "../../assets/thumbnail4.png";
import thumnail5 from "../../assets/thumbnail5.png";
import thumnail6 from "../../assets/thumbnail6.png";
import thumnail7 from "../../assets/thumbnail7.png";
import thumnail8 from "../../assets/thumbnail8.png";
import { API_KEY, value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [categoryId]);
  return (
    <div className="recommended">
      {apiData.map((item, index) => {
        return (
          <Link
            index={index}
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="side-video-list"
          >
            <img src={item.snippet.thumbnails.default.url} alt="" />
            <div className="vid-info">
              <h4>
                {item.snippet.title.length > 40
                  ? item.snippet.title.slice(0, 40) + "..."
                  : item.snippet.title}
              </h4>
              <p>{item.snippet.channelTitle}</p>
              <p> {value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
