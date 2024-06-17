import React, { useEffect, useState } from "react";
import { youtube_api } from "./Api";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { menuEmptyState } from "../Utils/SideBarSlice";
import { useDispatch } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
const dispatch =  useDispatch()
  const getVideo = async () => {
    try {
      const response = await fetch(youtube_api);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json, "JSON");
      setVideos(json?.items);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    getVideo();
    dispatch(menuEmptyState(true));
  }, []);

  return (
    <div className="flex flex-wrap cursor-pointer">
      {error && <div>Error: {error}</div>}
      {videos.map((video) => {
        return (
          <Link to={`/watch?v=${video.id}`}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
