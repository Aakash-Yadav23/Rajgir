import React from "react";


interface TravelCardProps {
  title: string;
  images: string;
  rating: number;
  current?: boolean;
}

const TravelCard: React.FC<TravelCardProps> = ({
  title,
  current,
  rating,
  images,
}) => {
  return (
    <div
      className={`w-[250px] transition flex flex-col  rounded-[10px] overflow-hidden text-white ${
        current
          ? "h-[450px] transition-all duration-1000 ease-in-out transform"
          : "mt-14 transition ease-in-out duration-1000 h-[350px]"
      }  shadow-lg`}
      style={{
        transitionProperty: "filter, transform",
        transitionTimingFunction: "ease-out",
        transitionDuration: "0.3s",
        filter: current ? "none" : "brightness(80%)",
      }}
    >
      <h3>{title}</h3>
      {/* <StarRatings
        rating={rating}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
      /> */}
     
   
        <div className="flex w-[100%] mt-1 rounded-[10px]  overflow-hidden">
          <img
            src={images}
            alt="Travel"
            className={`bg-contain w-full ${
              current ? "h-[400px]" : "h-[300px]"
            } transition-all duration-500`}
            style={{
              objectFit: "cover",
              filter: "brightness(100%)",
              transitionProperty: "filter, height",
              transitionTimingFunction: "ease-out",
              transitionDuration: current ? "0.5s" : "0.8s", // Increase the duration for height change
            }}
          />
    
      </div>
    </div>
  );
};

export default TravelCard;
