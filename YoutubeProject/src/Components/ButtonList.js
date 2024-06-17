import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Dance",
    "Study",
    "Politics",
    "Games",
    "Arts",
    "Cooking",
    "Cleaning",
  ];
  return (
    <div className="flex gap-2 ml-40 justify-center">
      {list.map((item, index) => {
        return <Button key={index} button={item} />;
      })}
    </div>
  );
};

export default ButtonList;
