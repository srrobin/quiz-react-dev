import React from "react";
import Answers from "../components/Answers";
import MiniPlayer from "../components/MiniPlayer";
import ProgressBar from "../components/ProgressBar";
import ProgressTitle from "../components/ProgressTitle";
const Quize = () => {
  return (
    <>
      <ProgressTitle />
      <Answers />
      <ProgressBar />
      <MiniPlayer />
    </>
  );
};

export default Quize;
