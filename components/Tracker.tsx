import React from "react";

interface TrackerProps {
  currentNumber: number;
  dataLength: number;
}

const Tracker: React.FC<TrackerProps> = ({ currentNumber, dataLength }) => {
  const startIndex = Math.max(currentNumber - 2, 0); // Calculate the start index for the displayed numbers
  const endIndex = Math.min(startIndex + 4, dataLength - 1); // Calculate the end index for the displayed numbers
  const numbersToDisplay = Array.from(
    { length: dataLength },
    (_, index) => index + 1
  ).slice(startIndex, endIndex + 1); // Display the numbers within the range

  const containerHeight =
    numbersToDisplay.length > 5
      ? `${5 * 20}px`
      : `${numbersToDisplay.length * 20}px`; // Adjust container height based on the number of displayed numbers

  return (
    <div className="flex fixed h-full items-center justify-center z-[10]">
      <div className="fixed  h-full w-[4px] bg-gray-300 "></div>
      <div
        className="h-full flex flex-col items-center justify-around z-[5]"
        style={{
        //   maxHeight: containerHeight,
          overflowY: numbersToDisplay.length > 5 ? "scroll" : "auto",
          scrollbarWidth: "none", // Hide the scrollbar for Firefox
          msOverflowStyle: "none", // Hide the scrollbar for IE/Edge
        }}
      >
        {numbersToDisplay.map((number: number, index: number) => (
          <div
            key={index}
            className={`number bg-gray-200 transition duration-300 flex items-center justify-center h-2 w-2 rounded-full ${
              currentNumber + 1 === number
                ? "transition duration-300 h-8 w-8"
                : ""
            }`}
          >
            {currentNumber + 1 === number ? number : " "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracker;
