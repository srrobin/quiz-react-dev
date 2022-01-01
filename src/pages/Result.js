import React from "react";
import Analysis from "../components/Analysis";
import Summary from "../components/Summary";

const Result = () => {
  return (
    <>
      <Summary obtainedMark="20" totaMark="50" />
      <Analysis question="how to declare empty array in javascript" />
    </>
  );
};

export default Result;
