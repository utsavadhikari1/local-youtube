import React from "react";
import Button from "./Button";

// const List = [
//   "All",
//   "Gaming",
//   "Sports",
//   "Live",
//   "Football",
//   "Cricket",
//   "News",
//   "Cooking",
// ];

const ButtonList = () => {
  return (
    <div className=" flex ">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Sports" />
      <Button name="Live" />
      <Button name="Football" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Cooking" />
      <Button name="Fashion" />
      <Button name="Anime" />
      <Button name="Foods" />
      <Button name="Mixes" />
      <Button name="Esports" />
    </div>
  );
};

export default ButtonList;
