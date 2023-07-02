import React, { useState } from "react";
import TravelCard from "./TravelCard";
import Tracker from "./Tracker";
import { motion } from "framer-motion";

import data from "@/data.json"; // Adjust the file path if needed
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Link from "next/link";

const TravelMain = () => {
  const { places } = data;
  const [currentPlace, setCurrentPlace] = useState(0);
  const [setTextTransform, setTextTransformor] = useState(true);
 const titleVariants = {
   moving: {
     y: [-20, 20], // Move the title up and down
     transition: {
       y: {
         repeat: Infinity, // Repeat the animation indefinitely
         duration: 1, // Duration of each animation cycle (in seconds)
         ease: "easeInOut", // Easing function
       },
     },
   },
 };

 const descriptionVariants = {
   moving: {
     y: [-20, 20], // Move the description up and down
     transition: {
       y: {
         repeat: Infinity, // Repeat the animation indefinitely
         duration: 1, // Duration of each animation cycle (in seconds)
         ease: "easeInOut", // Easing function
       },
     },
   },
 };

  const handleNextPlace = () => {
  
    setCurrentPlace((prevPlace) =>
      prevPlace === places.length - 1 ? 0 : prevPlace + 1
    );
  };

  const handlePreviousPlace = () => {
 
    setCurrentPlace((prevPlace) =>
      prevPlace === 0 ? places.length - 1 : prevPlace - 1
    );
   
  };

  const { title, description } = places[currentPlace];

  return (
    <div className="flex relative flex-col gap-5 w-[100%]">
      <Tracker currentNumber={currentPlace} dataLength={data?.places?.length} />
      <div className="flex flex-col md:flex-row lg:flex-row h-screen">
        <div className="relative  w-full md:w-[60%] lg:w-[60%] mt-[100px]  flex flex-col gap-4 pl-[27px] justify-center">
          <motion.h3
            className={`
              rotate- transition-transform pl-2 md:pl-0
               sm:text-2xl md:text-3xl text-white font-bold lg:text-8xl`}
            animate={setTextTransform ? "moving" : { y: 0 }}
            variants={titleVariants}
          >
            {title}
          </motion.h3>
          <motion.p
            className={`
            max-w-[800px]
              ml-2 transition-transform text-white max-w-[100%]`}
            animate={setTextTransform ? "moving" : { y: 0 }}
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
{/* 
          <Link
            className="mt- fixe bottom-13 flex items-center gap-4 pl-4 pr-4 font-bold text-2xl bg-blue-900 text-white rounded-sm w-fit p-2"
            href={`/article`}
          >
            Explore
          </Link> */}
        </div>

        <div
          className="flex w-full pl-[31px] items-center bg-transparent w-full mt-[20px] md:mt-[100px] md:w-[40%] lg:w-[40%]
           overflow-hidden"
          // style={{
          //   transition: "opacity 0.3s ease-in",
          //   opacity: setFade ? 0 : 1,
          // }}
        >
          <div
            className="flex gap-8 transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentPlace * 282}px)`,
              transitionTimingFunction: "ease-in-out",
            }}
          >
            {places.map((place, index) => (
              <div
                key={index}
                className={`w-full box-border  transition duration-1000 ease-in-out overflow-hidden
           
                `}
              >
                <TravelCard
                  title={place.title}
                  images={place.images}
               
                  current={index === currentPlace}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex fixed text-white bottom-4 left-0 right-0 justify-center">
        <button
          className="mr-3 bg-gray-500 hover:bg-blue-500 hover:text-white h-[50px] w-[50px] flex items-center rounded-full justify-center"
          onClick={handlePreviousPlace}
        >
          <GrFormPrevious className="text-white" />
        </button>
        <button
          onClick={handleNextPlace}
          className="bg-gray-500 h-[50px] hover:bg-blue-500 hover:text-white w-[50px] flex items-center rounded-full justify-center"
        >
          <GrFormNext className="text-white " />
        </button>
      </div>
    </div>
  );
};

export default TravelMain;
