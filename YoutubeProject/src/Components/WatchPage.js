import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { menuEmptyState } from "../Utils/SideBarSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"), "SEARCHPARAMS");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuEmptyState(false));
  }, []);

  return (
    <div className="px-44">
    <div className="flex">
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    </div>
  );
};

export default WatchPage;
