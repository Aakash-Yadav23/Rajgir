import React from "react";

interface TrackerProps {
  currentNumber: number;
  dataLength: number;
}

const Tracker: React.FC<TrackerProps> = ({ currentNumber, dataLength }) => {
  
  return (
<div className="fixed  ">
<h1 className="text-[350px] text-gray-200 opacity-30 blur-[px] shadow-lg">{currentNumber+1}</h1>
</div>
  )
  
};

export default Tracker;
