import React from "react";
import StarRatings from "react-star-ratings";
import { AiOutlineHeart } from "react-icons/ai";

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
      className={`w-[250px] transition flex flex-col gap-1 rounded-[10px] overflow-hidden text-white ${
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
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        numberOfStars={5}
        starDimension="20px"
        starSpacing="2px"
      />
      <div className="relative">
        <div className="absolute top-0 right-0 m-2 h-[50px] w-[50px] rounded-full flex items-center justify-center transition duration-300 hover:text-black hover:bg-gray-100 cursor-pointer">
          <AiOutlineHeart size={25} />
        </div>
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
    </div>
  );
};

export default TravelCard;
